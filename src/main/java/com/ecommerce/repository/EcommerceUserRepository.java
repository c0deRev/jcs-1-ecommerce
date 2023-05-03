package com.ecommerce.repository;

import com.ecommerce.model.EcommerceUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface EcommerceUserRepository extends JpaRepository<EcommerceUser, Long> {

    @Query("FROM EcommerceUser u WHERE u.username = :username AND u.password = :password")
    Optional<EcommerceUser> findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

    Optional<EcommerceUser> findByUsername(String username);
}
