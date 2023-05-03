package com.ecommerce.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Entity
@Accessors(chain = true)
public class EcommerceUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    private String username;
    private String password;

    @OneToOne(mappedBy = "cartOwner")
    @JoinColumn(name = "cart_id")
    private EcommerceCart cart;
}
