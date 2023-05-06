package com.ecommerce.repository;

import com.ecommerce.model.EcommerceUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface EcommerceUserRepository extends JpaRepository<EcommerceUser, Long> {

    /**
     * Find a user based on a given username and password. This is currently deprecated
     * as Spring Security now takes care of logins and handles the {@link org.springframework.security.core.context.SecurityContext}
     * @param username {@link String}
     * @param password {@link String}
     * @return
     */
    @Deprecated
    @Query("FROM EcommerceUser u WHERE u.username = :username AND u.password = :password")
    Optional<EcommerceUser> findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

    /**
     * Find user by their username.
     * @param username - {@link String} of the username
     * @return - {@link EcommerceUser}
     */
    Optional<EcommerceUser> findByUsername(String username);
}
