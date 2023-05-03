package com.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Entity
@Accessors(chain = true)
public class EcommerceCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private Long id;
    @ManyToMany
    @Column(unique = false)
    List<EcommerceProduct> productList;


    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference("BackReference-Cart-to-User")
    EcommerceUser cartOwner;
}

