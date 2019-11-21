package com.cerner.SCPInternsProjectBackend.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// utilMapping(registry, "/patients");
		// utilMapping(registry, "/doctors");
		// utilMapping(registry, "/patient");
		// utilMapping(registry, "/about");
		utilMapping(registry,"/**");

	}
	
	private void utilMapping(CorsRegistry registry, String path) {
		registry.addMapping(path).allowedOrigins("*")
				.allowedMethods("OPTIONS", "GET", "PUT").allowedHeaders("*");
	}
}
