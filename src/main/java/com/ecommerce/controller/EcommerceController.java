package com.ecommerce.controller;

import com.ecommerce.exceptions.BadCredentialsException;
import com.ecommerce.model.*;
import com.ecommerce.service.EcommerceCartService;
import com.ecommerce.service.EcommerceProductService;
import com.ecommerce.service.EcommerceUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class EcommerceController {

    private final EcommerceUserService ecommerceUserService;
    private final EcommerceProductService ecommerceProductService;
    private final EcommerceCartService ecommerceCartService;

    @PostMapping("/authenticate")
    public ResponseEntity<EcommerceCredentials> doLogin(@RequestBody EcommerceCredentials credentials) {
        // : check if user/pass matches in database

        if (ecommerceUserService.authenticate(credentials)){
            // : user is authenticated
            credentials.setPassword(null);
            return ResponseEntity.ok(credentials);
        } else {
            throw new BadCredentialsException("Username or password is incorrect");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<EcommerceUser> doRegister(@RequestBody EcommerceCredentials credentials){

        EcommerceUser user = new EcommerceUser().setUsername(credentials.getUsername()).setPassword(credentials.getPassword());

        user = this.ecommerceUserService.addUser(user);

        user.setPassword(null);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/user")
    public ResponseEntity<?> getInfo() {
        // : return user information of the currently authenticated user
        return ResponseEntity.ok(null);
    }

    @GetMapping("/product/all")
    public ResponseEntity<List<EcommerceProduct>> getProductList(){
        // : get a list of all products

        return ResponseEntity.ok(
                this.ecommerceProductService.getAllProducts()
        );
    }

    @GetMapping("/product")
    public ResponseEntity<EcommerceProduct> getProductInfo(@RequestParam("id") String id){
        // : get the id from the query string

        // : return the product associated with that id
        return ResponseEntity.ok(
                this.ecommerceProductService.getProductById(Long.valueOf(id))
        );
    }

    @PostMapping("/cart/add/{id}")
    public ResponseEntity<EcommerceCart> addItemToCart(@PathVariable("id") Long productId,
                                                       @RequestBody EcommerceCredentials credentials){
        // : add an item to a users cart
        return ResponseEntity.ok(
                this.ecommerceCartService.addItemForUser(productId, credentials.getUsername())
        );
    }

    @PostMapping("/cart")
    public ResponseEntity<EcommerceCart> getItemsFromCart(@RequestBody EcommerceCredentials credentials){
        // : get and return a cart
        return ResponseEntity.ok(
                this.ecommerceCartService.findCartByUsername(credentials.getUsername())
        );
    }

    @PostMapping("/checkout")
    public ResponseEntity<EcommerceCheckout> doCheckout(@RequestBody EcommerceCredentials credentials) {
        return ResponseEntity.ok(
                this.ecommerceCartService.checkout(credentials.getUsername())
        );
    }


}
