package com.ecommerce.service;

import com.ecommerce.exceptions.CartNotFoundException;
import com.ecommerce.model.EcommerceCart;
import com.ecommerce.model.EcommerceCheckout;
import com.ecommerce.model.EcommerceProduct;
import com.ecommerce.model.EcommerceUser;
import com.ecommerce.repository.EcommerceCartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
@Primary
@RequiredArgsConstructor
public class EcommerceCartServiceSecureImpl implements EcommerceCartService {
    private final EcommerceCartRepository ecommerceCartRepository;
    private final EcommerceProductService ecommerceProductService;
    private final EcommerceUserService ecommerceUserService;


    @Override
    public EcommerceCart addItemForUser(Long productId, String username) {
        // : ensure user exists

        EcommerceUser user = this.ecommerceUserService.findByUsername(username);

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
        cart.get().setCartOwner(user);

        // : save and return the cart
        return this.ecommerceCartRepository.save(cart.get());
    }

    @Override
    public EcommerceCart findCartByUsername(String username) {
        return this.ecommerceCartRepository.findCartByUsername(username).orElseThrow(() ->
            new CartNotFoundException("The cart does not exist")
        );
    }

    @Override
    public EcommerceCheckout checkout(String username) {
        EcommerceCheckout checkout = new EcommerceCheckout();

        // : get the total of the users cart

      EcommerceCart cart = this.findCartByUsername(username);
        Double total = cart.getProductList()
                .stream()
                .map(EcommerceProduct::getPrice)
                .reduce(Double::sum).orElseGet(() -> 0.00);

        checkout.setTotal(total);

        // delete the checked out cart
        this.ecommerceCartRepository.delete(cart);

        return checkout;
    }

  @Override
  public EcommerceCart deleteCartItem(Long productId, String username) {

    EcommerceUser user = this.ecommerceUserService.findByUsername(username);

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

    cart.get().getProductList().remove(product);
    cart.get().setCartOwner(user);

    // : save and return the cart
    return this.ecommerceCartRepository.save(cart.get());
  }
}
