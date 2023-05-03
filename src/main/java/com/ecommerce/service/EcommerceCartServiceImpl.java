package com.ecommerce.service;

import com.ecommerce.exceptions.CartNotFoundException;
import com.ecommerce.model.EcommerceCart;
import com.ecommerce.model.EcommerceProduct;
import com.ecommerce.repository.EcommerceCartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EcommerceCartServiceImpl implements EcommerceCartService {
    private final EcommerceCartRepository ecommerceCartRepository;
    private final EcommerceProductService ecommerceProductService;


    @Override
    public EcommerceCart addItemForUser(Long productId, String username) {
        // : get the current cart owned by the user

        // : --- if it does not exist create it

        Optional<EcommerceCart> cart = this.ecommerceCartRepository.findCartByUsername(username);

        if (cart.isEmpty()) {
            cart = Optional.of(new EcommerceCart());
        }

        // : add the item to the cart

        // : --- get a reference to the item

        // this throws an exception if the product is not found
        EcommerceProduct product = this.ecommerceProductService.getProductById(productId);

        // : --- add the product to the cart
        if (Optional.ofNullable(cart.get().getProductList()).isEmpty()){
            cart.get().setProductList(new ArrayList<>());
        }

        cart.get().getProductList().add(product);

        // : save and return the cart
        return this.ecommerceCartRepository.save(cart.get());
    }

    @Override
    public EcommerceCart findCartByUsername(String username) {
        return this.ecommerceCartRepository.findCartByUsername(username).orElseThrow(() ->
            new CartNotFoundException("The cart does not exist")
        );
    }
}
