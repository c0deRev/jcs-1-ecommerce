package com.ecommerce.model;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * Represents the checkout item returned from the checkout endpoint.
 */
@Data
@Accessors(chain = true)
public class EcommerceCheckout {
    Double total;
}
