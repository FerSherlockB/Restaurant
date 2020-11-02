package com.delivery.demo.controllers;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.delivery.demo.DTO.token.TokenDTO;
import com.delivery.demo.DTO.user.UserDTO;
import com.delivery.demo.jwt.JwtUtil;
import com.delivery.demo.services.user.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j

@RestController
public class TokenController {

	@Autowired
	private UserService userService;
	@Autowired
	JwtUtil jwtUtils;

	@PostMapping(value = "/token")
	public ResponseEntity<TokenDTO> token(@RequestBody Map<String, String> payload) {
		String email = payload.get("email");
		String password = payload.get("password");
		log.info("Creating token for user: {}", email);
		Optional<UserDTO> userDTO = userService.findByEmail(email);
		if (userDTO.isPresent() && userDTO.get().getPassword().equals(password)) {
			String token = jwtUtils.encode(userDTO.get());
			TokenDTO tokenDTO = TokenDTO.builder()
								.token(token)
								.build();
			return ResponseEntity.status(HttpStatus.OK).body(tokenDTO);
		}
		else {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
		}

	}

}
