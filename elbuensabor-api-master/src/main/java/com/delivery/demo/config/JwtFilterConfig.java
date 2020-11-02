package com.delivery.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.delivery.demo.filter.JwtFilter;
import com.delivery.demo.jwt.JwtUtil;

@Configuration
public class JwtFilterConfig {

	@Autowired
	private JwtUtil jwtUtil;

	@Bean
	public FilterRegistrationBean<JwtFilter> jwtFilter() {
		final FilterRegistrationBean<JwtFilter> registrationBean = new FilterRegistrationBean<JwtFilter>();
		registrationBean.setFilter(new JwtFilter(jwtUtil));
		registrationBean.addUrlPatterns("/api/v1/user/*");
		return registrationBean;
	}

}