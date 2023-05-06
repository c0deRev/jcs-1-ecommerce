package com.ecommerce;

import com.ecommerce.model.EcommerceCredentials;
import com.ecommerce.model.EcommerceUser;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;


import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestBuilders.formLogin;
import static org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.authenticated;

@SpringBootTest
@AutoConfigureMockMvc
@TestPropertySource(properties = {
        "DB_URL=jdbc:h2:mem:test-db\\;DB_CLOSE_DELAY=-1",
        "DB_DRIVER=org.h2.Driver",
        "DB_DIALECT=org.hibernate.dialect.H2Dialect",
        "DB_USER=sa",
        "DB_PASS=password",
        "H2_CONSOLE=true",
        "DDL_AUTO=create-drop"
})
public class ControllerIntegratonTests {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserDetailsService userDetailsService;

    private final ObjectMapper objectMapper = new ObjectMapper();


    @Test
    @DisplayName("Test that endpoint is protected against unauthorized access")
    public void accessUnprotected() throws Exception {
        this.mockMvc.perform(get("/product/all"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("Test Registration Success")
    public void register_givenUniqueUserPass_whenRegister_returnHttpStatus200_on_success() throws Exception {
        String username = "testUser";
        String password = "testPass";

        EcommerceCredentials credentials = new EcommerceCredentials(
                username,
                password
        );

        EcommerceUser newUser = new EcommerceUser().setUsername(username).setPassword(password);

        EcommerceUser registeredUser = new EcommerceUser();
        registeredUser.setId(1L);
        registeredUser.setUsername(username);
        registeredUser.setPassword(password);

        String json = objectMapper.writeValueAsString(credentials);
        mockMvc.perform(
                        post("/register")
                                .content(json)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("Test Login Failure")
    public void login_givenUnknownUserPass_whenLogin_returnHttpStatus401_on_failure() throws Exception {
        EcommerceCredentials credentials = new EcommerceCredentials(
                "testUser",
                "testPass"
        );

        String json = objectMapper.writeValueAsString(credentials);
        mockMvc.perform(
                post("/login")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isBadRequest());
    }

    @Test
    @DisplayName("Test Login Success")
    public void login_givenMatchingUserPass_whenLogin_returnHttpStatus202_AND_ecommerceCredentials_on_success() throws Exception {

        String username = "testUser";
        String password = "testPass";

        EcommerceCredentials credentials = new EcommerceCredentials(
                username,
                password
        );

        mockMvc.perform(
                        formLogin().user(username).password(password)
                )
                .andDo(print())
                .andExpect(authenticated());
    }
}
