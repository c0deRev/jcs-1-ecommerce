package com.ecommerce.config;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Controls the main configuration of Spring Security. This class exposes a bean of the type
 * {@link SecurityFilterChain} that is configured using the {@link HttpSecurity} object.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests(auth ->
                    auth
                        .requestMatchers(
                  "/register",
                          "/",
                          "/cart-list",
                          "/product-list",
                          "/*.css",
                          "/*.js",
                          "/index.html",
                          "/favicon.ico",
                          "/assets/**"
                        )
                        .permitAll()
                        .requestMatchers(
                          "/user",
                          "/product/all",
                          "/cart",
                          "/cart/*",
                          "/cart/add/**",
                          "/checkout",
                          "/logout"
                        )
                        .hasRole("USER")
                )
                .exceptionHandling()
                .authenticationEntryPoint((request, response, authException) -> response.setStatus(HttpServletResponse.SC_UNAUTHORIZED))
                .accessDeniedHandler((request, response, accessDeniedException) -> response.setStatus(HttpServletResponse.SC_FORBIDDEN))
                .and()
                .formLogin(config -> config
                        .failureHandler((request, response, exception) -> response.setStatus(HttpServletResponse.SC_BAD_REQUEST))
                        .successHandler((request, response, authentication) -> response.setStatus(HttpServletResponse.SC_ACCEPTED))
                )
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessHandler((request, response, authentication) -> response.setStatus(HttpServletResponse.SC_ACCEPTED))
                        .invalidateHttpSession(true)
                        .deleteCookies("JSESSIONID")
                )
                .csrf(csrf -> csrf
                        .ignoringRequestMatchers("/**")
                ).build();
    }

}
