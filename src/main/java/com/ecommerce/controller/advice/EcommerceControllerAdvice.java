package com.ecommerce.controller.advice;

import com.ecommerce.exceptions.*;
import com.ecommerce.model.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.sql.Date;
import java.time.Instant;

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
        ErrorResponse response = ErrorResponse
                .builder()
                .timestamp(Date.from(Instant.now()))
                .message(responseBody)
                .build();
        return new ResponseEntity<ErrorResponse>(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = {
            AccountExistsException.class
    })
    public ResponseEntity<?> handleDuplicateAccount(RuntimeException ex, WebRequest request){
        ex.printStackTrace();
        String responseBody = ex.getMessage();
        ErrorResponse response = ErrorResponse
                .builder()
                .timestamp(Date.from(Instant.now()))
                .message(responseBody)
                .build();
        return new ResponseEntity<ErrorResponse>(response, HttpStatus.BAD_REQUEST);

    }

    @ExceptionHandler(value = {
            BadCredentialsException.class,
    })
    public ResponseEntity<?> handleBadCredentials(RuntimeException ex, WebRequest request){
        ex.printStackTrace();
        String responseBody = ex.getMessage();
        ErrorResponse response = ErrorResponse
                .builder()
                .timestamp(Date.from(Instant.now()))
                .message(responseBody)
                .build();
        return new ResponseEntity<ErrorResponse>(response, HttpStatus.UNAUTHORIZED);

    }

}
