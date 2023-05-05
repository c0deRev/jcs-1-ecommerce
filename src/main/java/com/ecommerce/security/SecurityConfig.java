package com.ecommerce.security;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests(auth ->
                    auth
                        .requestMatchers(
                                "/register"
                        )
                        .permitAll()
                        .requestMatchers(
                                "/product/all",
                                "/cart/add/**",
                                "/checkout"
                        )
                        .hasRole("USER")
                )
                .formLogin(config -> config
                        .successHandler((request, response, authentication) -> response.setStatus(HttpServletResponse.SC_ACCEPTED))
                )
                .csrf((csrf) -> csrf
                        .ignoringRequestMatchers("/**")
                ).build();
    }

}
