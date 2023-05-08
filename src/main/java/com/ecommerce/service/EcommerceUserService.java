package com.ecommerce.service;

import com.ecommerce.model.EcommerceCredentials;
import com.ecommerce.model.EcommerceUser;

public interface EcommerceUserService {
    /**
     * Return the user details of a currently authenticated session.
     * @param credentials {@link EcommerceCredentials}
     * @return {@link Boolean} True or False
     */
    boolean authenticate(EcommerceCredentials credentials);

    /**
     * Add a new user to the application.
     * @param user {@link EcommerceUser}
     * @return {@link EcommerceUser}
     */
    EcommerceUser addUser(EcommerceUser user);

    /**
     * Get a {@link EcommerceUser} from the username
     * @param username {@link String} username
     * @return {@link EcommerceUser}
     */
    EcommerceUser findByUsername(String username);
}
