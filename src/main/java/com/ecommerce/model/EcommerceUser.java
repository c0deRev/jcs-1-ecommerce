package com.ecommerce.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Objects;

/**
 * Entity that represents application data for a single user.
 */
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EcommerceUser that = (EcommerceUser) o;
        return Objects.equals(username, that.username) && Objects.equals(password, that.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username);
    }
}
