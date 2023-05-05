package com.ecommerce.service;


import com.ecommerce.exceptions.AccountExistsException;
import com.ecommerce.exceptions.AccountNotFoundException;
import com.ecommerce.exceptions.BadCredentialsException;
import com.ecommerce.model.EcommerceCredentials;
import com.ecommerce.model.EcommerceUser;
import com.ecommerce.repository.EcommerceUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Primary
@RequiredArgsConstructor
public class EcommerceUserServiceSecureImpl implements EcommerceUserService {

    @Autowired
    private EcommerceUserRepository ecommerceUserRepository;
    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    public boolean authenticate(EcommerceCredentials credentials) {
        SecurityContext context = SecurityContextHolder.getContext();
        UserDetails userDetails = (UserDetails) context.getAuthentication().getDetails();

        return context.getAuthentication().isAuthenticated()
                && credentials.getUsername().equals(userDetails.getUsername());
    }

    @Override
    public EcommerceUser addUser(EcommerceUser user) {
        // : check if username exists

        try {
            UserDetails lookupUser = this.userDetailsService.loadUserByUsername(user.getUsername());

            throw new AccountExistsException("That username is already registered");

        } catch (UsernameNotFoundException e) {
            UserDetails newUser = User
                    .builder()
                    .username(user.getUsername())
                    .password(this.encoder.encode(user.getPassword()))
                    .roles("USER")
                    .build();

            ((InMemoryUserDetailsManager) this.userDetailsService).createUser(newUser);

            return new EcommerceUser().setUsername(user.getUsername()).setPassword(null).setCart(null);
        }

    }

    @Override
    public EcommerceUser findByUsername(String username) {
        return this.ecommerceUserRepository.findByUsername(username).orElseThrow(() ->
                new AccountNotFoundException("Cannot add to cart for a user that does not exist")
        );
    }
}
