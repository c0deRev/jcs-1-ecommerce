package com.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class ErrorResponse {

    private Date timestamp;
    private String message;

    public Date getTimestamp() {
        return timestamp;
    }

     public void setTimestamp(Date timestamp) {
         this.timestamp = timestamp;
     }

     public String getMessage() {
         return message;
     }

     public void setMessage(String message) {
         this.message = message;
    }
}
