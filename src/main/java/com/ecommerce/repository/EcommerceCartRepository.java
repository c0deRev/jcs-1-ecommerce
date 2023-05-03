package com.ecommerce.repository;

import com.ecommerce.model.EcommerceCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface EcommerceCartRepository extends JpaRepository<EcommerceCart, Long> {
    @Query("FROM EcommerceCart c WHERE c.cartOwner.username = :username")
    Optional<EcommerceCart> findCartByUsername(@Param("username") String username);
}
