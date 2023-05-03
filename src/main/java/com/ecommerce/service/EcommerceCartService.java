package com.ecommerce.service;

import com.ecommerce.model.EcommerceCart;
import com.ecommerce.model.EcommerceCheckout;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface EcommerceCartService {
    EcommerceCart addItemForUser(Long productId, String username);

    EcommerceCart findCartByUsername(String username);

    EcommerceCheckout checkout(String username);
}