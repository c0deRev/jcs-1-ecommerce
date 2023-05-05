package com.ecommerce;

import com.ecommerce.model.EcommerceCredentials;
import com.ecommerce.model.EcommerceUser;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = {
		"DB_URL=jdbc:h2:mem:test-db\\;DB_CLOSE_DELAY=-1",
		"DB_DRIVER=org.h2.Driver",
		"DB_DIALECT=org.hibernate.dialect.H2Dialect",
		"DB_USER=sa",
		"DB_PASS=password",
		"H2_CONSOLE=true",
		"DDL_AUTO=create-drop"
})
class EcommerceApplicationTests {

	@Autowired
	private TestRestTemplate restTemplate;

	@Test
	@DisplayName("Test that Spring Boot loads without error")
	void contextLoads() {
	}


	@Test
	@DisplayName("Test register endpoint")
	public void register_test(){
		String username = "testUser";
		String password = "testPass";

		EcommerceCredentials credentials = new EcommerceCredentials(username, password);
		EcommerceUser user = new EcommerceUser();
		user.setUsername(username).setPassword(password).setId(1L);

		var response = restTemplate.postForEntity("/register", credentials, EcommerceCredentials.class);

		assertEquals(EcommerceCredentials.class, response.getBody().getClass());
	}

}
