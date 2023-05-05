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
                        .successHandler((request, response, authentication) -> response.setStatus(HttpServletResponse.SC_ACCEPTED))
                )
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessHandler((request, response, authentication) -> response.setStatus(HttpServletResponse.SC_ACCEPTED))
                        .invalidateHttpSession(true)
                        .deleteCookies("JSESSIONID")
                )
                .csrf((csrf) -> csrf
                        .ignoringRequestMatchers("/**")
                ).build();
    }

}
