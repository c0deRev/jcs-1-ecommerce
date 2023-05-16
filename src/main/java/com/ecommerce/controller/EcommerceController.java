package com.ecommerce.controller;

import com.ecommerce.exceptions.BadCredentialsException;
import com.ecommerce.model.*;
import com.ecommerce.service.EcommerceCartService;
import com.ecommerce.service.EcommerceProductService;
import com.ecommerce.service.EcommerceUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>This is a simple application that uses only one controller.</p>
 * <br>
 * <p>This controller has endpoints for authentication as well as endpoints related
 * the functionality of the application.</p>
 */
@RestController
@RequiredArgsConstructor
public class EcommerceController {

    private final EcommerceUserService ecommerceUserService;
    private final EcommerceProductService ecommerceProductService;
    private final EcommerceCartService ecommerceCartService;

    /**
     * This endpoint is used to grab user credentials for a currently logged-in user. It can be used
     * by Angular in the case that the page is reloaded and application state is lost but the authentication
     * cookie remains. Instead of redoing a login request, the client can call this endpoint to check if
     * the session is still valid.
     * @param credentials - a username and password combo
     * @return {@link EcommerceCredentials}
     */
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

    /**
     * The register endpoint is a simple REST POST endpoint that allows unauthenticated users to
     * create new accounts. The user account of the created user is returned or an exception is thrown
     * if the username already exists.
     * @param credentials - username and password combo
     * @return {@link EcommerceUser}
     */
    @PostMapping("/register")
    public ResponseEntity<EcommerceUser> doRegister(@RequestBody EcommerceCredentials credentials){

        EcommerceUser user = new EcommerceUser().setUsername(credentials.getUsername()).setPassword(credentials.getPassword());

        user = this.ecommerceUserService.addUser(user);

        user.setPassword(null);
        return ResponseEntity.ok(user);
    }

    /**
     * Currently unused. Will be extended in the future to allow users modify their account and query
     * account related information.
     * @return - null
     */
    @GetMapping("/user")
    public ResponseEntity<?> getInfo() {
        // : return user information of the currently authenticated user
        return ResponseEntity.ok(null);
    }

    /**
     * Return a list of all available products as JSON. Paging is not supported with this
     * endpoint.
     * @return - {@link List<EcommerceProduct>}
     */
    @GetMapping("/product/all")
    public ResponseEntity<List<EcommerceProduct>> getProductList(){
        // : get a list of all products

        return ResponseEntity.ok(
                this.ecommerceProductService.getAllProducts()
        );
    }

    /**
     * Retrieve information about a single product.
     * @param id - id of the {@link EcommerceProduct} to retrieve.
     * @return {@link EcommerceProduct}
     */
    @GetMapping("/product")
    public ResponseEntity<EcommerceProduct> getProductInfo(@RequestParam("id") String id){
        // : get the id from the query string

        // : return the product associated with that id
        return ResponseEntity.ok(
                this.ecommerceProductService.getProductById(Long.valueOf(id))
        );
    }

    /**
     * Add an item to a user's cart. This endpoint associates a cart with a user if one does not
     * exist, and it adds a product whose id matches the given ID.
     * @param productId - {@link Long} Id
     * @return {@link EcommerceProduct}
     */
    @PostMapping("/cart/add/{id}")
    public ResponseEntity<EcommerceCart> addItemToCart(@PathVariable("id") Long productId){
        // : add an item to a users cart
        String username = ((Authentication) SecurityContextHolder.getContext().getAuthentication()).getName();
        return ResponseEntity.ok(
                this.ecommerceCartService.addItemForUser(productId, username)
        );
    }


    @DeleteMapping("/cart/{id}")
    public ResponseEntity<EcommerceCart> deleteCartItem(@PathVariable("id") Long productId){
      // : add an item to a users cart
      String username = ((Authentication) SecurityContextHolder.getContext().getAuthentication()).getName();
      return ResponseEntity.ok(
        this.ecommerceCartService.deleteCartItem(productId, username)
      );
    }


    /**
     * Retrieves the items in a user's cart and returns it as JSON list of products.
     * @return a {@link List} of {@link EcommerceProduct}
     */
    @GetMapping("/cart")
    public ResponseEntity<EcommerceCart> getItemsFromCart(){
        // : get and return a cart
        String username = ((Authentication) SecurityContextHolder.getContext().getAuthentication()).getName();

        return ResponseEntity.ok(
                this.ecommerceCartService.findCartByUsername(username)
        );
    }

    /**
     * Calculates total value of items in a user's cart and returns the result.
     * @return - {@link EcommerceCheckout}
     */
    @GetMapping("/checkout")
    public ResponseEntity<EcommerceCheckout> doCheckout() {
        String username = ((Authentication) SecurityContextHolder.getContext().getAuthentication()).getName();

        return ResponseEntity.ok(
                this.ecommerceCartService.checkout(username)
        );
    }


}
