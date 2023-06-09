package com.ecommerce.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * This entity represents a single product in the products table.
 */
@Data
@Entity
@Accessors(chain = true)
public class EcommerceProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long id;

    private String title;
    private String description;
    private Double price;
    private Long quantity;
    private String productUrl;
}
