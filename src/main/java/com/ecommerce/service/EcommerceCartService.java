package com.ecommerce.service;

import com.ecommerce.model.EcommerceCart;
import com.ecommerce.model.EcommerceCheckout;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface EcommerceCartService {

    /**
     * Add an item to a users cart
     * @param productId {@link Long} id of the {@link com.ecommerce.model.EcommerceProduct}
     * @param username {@link String} username of the user owning the cart
     * @return {@link EcommerceCart} owned by the user after additions are completed
     */
    EcommerceCart addItemForUser(Long productId, String username);

    /**
     * Find a cart by the username of a user
     * @param username {@link String} Username of the user
     * @return {@link EcommerceCart}
     */
    EcommerceCart findCartByUsername(String username);

    /**
     * Checkout a user by returning the total of their cart.
     * @param username {@link String} username of the user
     * @return {@link EcommerceCheckout} containing the total of the owning user's cart
     */
    EcommerceCheckout checkout(String username);

  EcommerceCart deleteCartItem(Long productId, String username);
}
