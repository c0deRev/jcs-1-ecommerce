package com.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Contains username and password combo for a user account.
 */
@Data
@AllArgsConstructor
public class EcommerceCredentials {
    private String username;
    private String password;
}
