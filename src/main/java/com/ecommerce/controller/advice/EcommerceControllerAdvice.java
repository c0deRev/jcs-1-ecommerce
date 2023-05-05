package com.ecommerce.controller.advice;

import com.ecommerce.exceptions.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class EcommerceControllerAdvice {
    @ExceptionHandler(value = {
            ProductNotFoundException.class,
            CartNotFoundException.class,
            AccountNotFoundException.class
    })
    public ResponseEntity<?> handleNotFoundException(RuntimeException ex, WebRequest request){
        ex.printStackTrace();
        String responseBody = ex.getMessage();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseBody);
    }

    @ExceptionHandler(value = {
            AccountExistsException.class
    })
    public ResponseEntity<?> handleDuplicateAccount(RuntimeException ex, WebRequest request){
        ex.printStackTrace();
        String responseBody = ex.getMessage();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }
    
    @ExceptionHandler(value = {
            BadCredentialsException.class,
    })
    public ResponseEntity<?> handleBadCredentials(RuntimeException ex, WebRequest request){
        ex.printStackTrace();
        String responseBody = ex.getMessage();
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(responseBody);
    }

}
