package com.ecommerce.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
public class MvcConfig implements WebMvcConfigurer {
  @Bean
  public InternalResourceViewResolver viewResolver() {
    InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    //resolver.setPrefix("/static/");
    resolver.setSuffix(".html");
    return resolver;
  }

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry
      .addViewController("/")
      .setViewName("index");
  }

  @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
          .addResourceHandler("/*.js", "/*.css", "/*.html", "/favicon.ico", "/assets/*.png")
          .addResourceLocations("classpath:/static/", "classpath:/static/assets/")
          .setCachePeriod(0);
    }


  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
      .allowedOrigins("http://localhost:10000")
      .allowedMethods("*")
      .allowedHeaders("*")
      .allowCredentials(true);
  }
}
