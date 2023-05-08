package com.ecommerce;

import com.ecommerce.controller.EcommerceController;
import com.ecommerce.model.EcommerceProduct;
import com.ecommerce.service.EcommerceCartService;
import com.ecommerce.service.EcommerceProductService;
import com.ecommerce.service.EcommerceUserService;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@WebMvcTest(EcommerceController.class)
@TestPropertySource(properties = {
        "DB_URL=jdbc:h2:mem:test-db\\;DB_CLOSE_DELAY=-1",
        "DB_DRIVER=org.h2.Driver",
        "DB_DIALECT=org.hibernate.dialect.H2Dialect",
        "DB_USER=sa",
        "DB_PASS=password",
        "H2_CONSOLE=true",
        "DDL_AUTO=create-drop"
})
public class ControllerUnitTests {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EcommerceUserService ecommerceUserService;
    @MockBean
    private EcommerceProductService ecommerceProductService;

    @MockBean
    EcommerceCartService ecommerceCartService;


    @Test
    public void test_givenInvalidUser_whenRequestProductEndpoint_returnHttpStatus401() throws Exception {
        List<EcommerceProduct> productList = new ArrayList<>(){
            {
                add(new EcommerceProduct().setTitle("prod-1").setId(1L));
                add(new EcommerceProduct().setTitle("prod-2").setId(2L));
            }
        };

        when(ecommerceProductService.getAllProducts()).thenReturn(productList);

        MvcResult result = this.mockMvc.perform(get("/product/all"))
                .andDo(print())
                .andExpect(status().isUnauthorized())
                .andReturn()
                ;
    }
    @WithMockUser
    @Test
    public void test_givenValidUser_whenRequestProductEndpoint_returnHttpStatus200_and_returnJsonProductList() throws Exception {
        List<EcommerceProduct> productList = new ArrayList<>(){
            {
                add(new EcommerceProduct().setTitle("prod-1").setId(1L));
                add(new EcommerceProduct().setTitle("prod-2").setId(2L));
            }
        };

        when(ecommerceProductService.getAllProducts()).thenReturn(productList);

        MvcResult result = this.mockMvc.perform(get("/product/all"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn()
                ;

        String responseJson = result.getResponse().getContentAsString();

        // Use JsonPath to extract the desired value from the JSON response
        String title = JsonPath.read(responseJson, "$[0].title");

        // Assert that the extracted value matches the expected value
        assertEquals("prod-1", title);


        // Use JsonPath to extract the desired value from the JSON response
        title = JsonPath.read(responseJson, "$[1].title");

        // Assert that the extracted value matches the expected value
        assertEquals("prod-2", title);
    }
}
