package com.ecommerce.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Configuration class that creates a {@link BCryptPasswordEncoder} instance as a {@link PasswordEncoder} bean.
 */
@Configuration
public class BCryptPasswordEncoderConfig {

  /**
   * Creates a {@link BCryptPasswordEncoder} instance as a {@link PasswordEncoder} bean.
   * @return A {@link PasswordEncoder} instance that uses the BCrypt algorithm to encode passwords.
  */
  @Bean
  @Primary
  public static PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
