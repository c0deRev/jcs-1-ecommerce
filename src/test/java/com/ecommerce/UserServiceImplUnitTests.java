package com.ecommerce;


import com.ecommerce.model.EcommerceCredentials;
import com.ecommerce.model.EcommerceUser;
import com.ecommerce.repository.EcommerceUserRepository;

import com.ecommerce.service.EcommerceUserServiceImpl;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.*;


@ExtendWith(MockitoExtension.class)
public class UserServiceImplUnitTests {

    @Mock
    private static EcommerceUserRepository ecommerceUserRepository;

    @InjectMocks
    private EcommerceUserServiceImpl ecommerceUserService;


    @BeforeAll
    public static void  setUp() throws Exception {
        ecommerceUserRepository = Mockito.mock(EcommerceUserRepository.class);
    }

    @Test
    @DisplayName("Test Register in EcommerceUserService")
    public void test_givenUniqueUserPass_whenUserServiceAddUser_returnEcommerceCredentials(){
        String username = "testUser";
        String password = "testPass";

        EcommerceUser inputUser = new EcommerceUser().setPassword(password).setUsername(username);
        EcommerceUser outUser   = new EcommerceUser().setPassword(password).setUsername(username).setId(1L);

        when(ecommerceUserRepository.save(inputUser)).thenReturn(outUser);
        when(ecommerceUserRepository.findByUsername(username)).thenReturn(Optional.empty());

        EcommerceCredentials credentials = new EcommerceCredentials(username, password);

        EcommerceUser result = ecommerceUserService.addUser(inputUser);
        assertEquals(outUser, result);
    }

    @Test
    @DisplayName("Test Authentication Success")
    public void test_givenValidUserPass_whenUserServiceAuthenticate_returnBooleanTrue() {
        String username = "testUser";
        String password = "testPass";

        EcommerceCredentials credentials = new EcommerceCredentials(username, password);
        EcommerceUser user = new EcommerceUser();
        user.setUsername(username).setPassword(password).setId(1L);

        when(ecommerceUserRepository.findByUsernameAndPassword(username, password)).thenReturn(Optional.of(user));

        Boolean result = ecommerceUserService.authenticate(credentials);

        assertEquals(true, result);

    }
}
