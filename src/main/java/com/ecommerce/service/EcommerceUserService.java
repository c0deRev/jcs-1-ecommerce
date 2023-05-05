package com.ecommerce.service;

import com.ecommerce.model.EcommerceCredentials;
import com.ecommerce.model.EcommerceUser;

public interface EcommerceUserService {
    boolean authenticate(EcommerceCredentials credentials);

    EcommerceUser addUser(EcommerceUser user);

    EcommerceUser findByUsername(String username);
}
