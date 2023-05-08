package com.ecommerce.annotation;

import java.lang.annotation.*;

/**
 * Used with Spring AOP to run authentication code prior to the execution of a method.
 * <br><br>
 * To ensure that any method requires authentication, simply write this annotation above
 * the method signature.
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@Documented
public @interface Authenticated {
}
