package com.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EcommerceCredentials {
    private String username;
    private String password;
}
