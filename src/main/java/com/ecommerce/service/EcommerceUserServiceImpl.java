package com.ecommerce.service;


import com.ecommerce.exceptions.AccountNotFoundException;
import com.ecommerce.exceptions.AccountExistsException;
import com.ecommerce.model.EcommerceCredentials;
import com.ecommerce.model.EcommerceUser;
import com.ecommerce.repository.EcommerceUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EcommerceUserServiceImpl implements EcommerceUserService {
    private final EcommerceUserRepository ecommerceUserRepository;

    @Override
    public boolean authenticate(EcommerceCredentials credentials) {
        return ecommerceUserRepository
                .findByUsernameAndPassword(credentials.getUsername(), credentials.getPassword())
                .isPresent();
    }

    @Override
    public EcommerceUser addUser(EcommerceCredentials credentials) {
        // : check if username exists
        Optional<EcommerceUser> lookupUser
                = this.ecommerceUserRepository.findByUsername(credentials.getUsername());

        if (lookupUser.isPresent()){
            throw new AccountExistsException("That username is already registered");
        } else {
            EcommerceUser newUser = new EcommerceUser();
            newUser.setUsername(credentials.getUsername());
            newUser.setPassword(credentials.getPassword());
            return this.ecommerceUserRepository.save(newUser);
        }
    }

    @Override
    public EcommerceUser findByUsername(String username) {
        return this.ecommerceUserRepository.findByUsername(username).orElseThrow(() ->
                new AccountNotFoundException("Cannot add to cart for a user that does not exist")
        );
    }
}
