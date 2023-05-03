package com.ecommerce.service;

import com.ecommerce.exceptions.ProductNotFoundException;
import com.ecommerce.model.EcommerceProduct;
import com.ecommerce.repository.EcommerceProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EcommerceProductServiceImpl implements EcommerceProductService {
    private final EcommerceProductRepository ecommerceProductRepository;
    @Override
    public List<EcommerceProduct> getAllProducts() {
        return this.ecommerceProductRepository.findAll();
    }

    @Override
    public EcommerceProduct getProductById(Long id) {
        return this.ecommerceProductRepository.findById(id).orElseThrow(() ->
                new ProductNotFoundException("That item does not exist")
        );
    }
}
