package com.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * This class is used to encapsulate error messages that are sent to the client.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
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
