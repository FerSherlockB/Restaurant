package com.delivery.demo.defaulters;

import org.springframework.stereotype.Component;

import com.delivery.demo.DTO.user.*;

@Component
public class UserDefaulter {

	public void populateDefaults(UserDTO userDTO) {
		populateRole(userDTO);
	}

	public void populateRole(UserDTO userDTO) {
		if (userDTO.getRole() == null) {
			userDTO.setRole("customer");
		}
	}

}
