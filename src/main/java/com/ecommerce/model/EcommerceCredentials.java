package com.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Contains username and password combo for a user account.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EcommerceCredentials {
    private String username;
    private String password;
}
