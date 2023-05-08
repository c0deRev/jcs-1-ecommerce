package com.ecommerce.repository;

import com.ecommerce.model.EcommerceProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EcommerceProductRepository extends JpaRepository<EcommerceProduct, Long> {
}
