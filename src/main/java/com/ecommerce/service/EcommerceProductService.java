package com.ecommerce.service;

import com.ecommerce.model.EcommerceProduct;

import java.util.List;
import java.util.Optional;

public interface EcommerceProductService {
    /**
     * Get a list of all the products
     * @return {@link List} of {@link EcommerceProduct}
     */
    List<EcommerceProduct> getAllProducts();

    /**
     * Get a single product from product id
     * @param valueOf {@link Long} Id
     * @return {@link EcommerceProduct}
     */
    EcommerceProduct getProductById(Long valueOf);
}
