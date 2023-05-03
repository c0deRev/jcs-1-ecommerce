package com.ecommerce.service;

import com.ecommerce.model.EcommerceProduct;

import java.util.List;
import java.util.Optional;

public interface EcommerceProductService {
    List<EcommerceProduct> getAllProducts();

    EcommerceProduct getProductById(Long valueOf);
}
