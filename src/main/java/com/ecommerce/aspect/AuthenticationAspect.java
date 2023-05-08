package com.ecommerce.aspect;

import com.ecommerce.exceptions.BadCredentialsException;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.ProceedingJoinPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

/**
 * Defines authentication related Spring AOP methods.
 */
@Aspect
@Component
public class AuthenticationAspect {
  /**
   * This method defines a method that runs before any with the @Authenticated annotation.
   * <br>
   * We use {@link Around} instead of {@link org.aspectj.lang.annotation.Before} because Around
   * gives us the ability to prevent the execution of the method in case of authentication failure.
   * @param joinPoint - This {@link ProceedingJoinPoint} lets us use the {@link ProceedingJoinPoint#proceed()}
   * method and supports the @Around annotation.
   * @return {@link Object} - enables us to proceed with the Authenticated method call
   * @throws Throwable
   */
  @Around("@annotation(com.ecommerce.annotation.Authenticated)")
  public Object authenticate(ProceedingJoinPoint joinPoint) throws Throwable {
    SecurityContext context = SecurityContextHolder.getContext();

    if (!context.getAuthentication().isAuthenticated()){
      throw new BadCredentialsException("You are not authorized to access this resource");
    }

    return joinPoint.proceed();
  }
}
