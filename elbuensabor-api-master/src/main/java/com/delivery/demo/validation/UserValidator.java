package com.delivery.demo.validation;

import org.apache.commons.lang3.EnumUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;
import com.delivery.demo.DTO.user.*;

@Component
public class UserValidator {

	public void validate(UserDTO userDTO) {
		validateEmail(userDTO);
		validateName(userDTO);
		validatePassword(userDTO);
	}

	private void validateEmail(UserDTO userDTO) {
		if (StringUtils.isBlank(userDTO.getEmail())) {
			userDTO.addError("Email can't be empty");
		}
	}

	private void validateName(UserDTO userDTO) {
		if (StringUtils.isBlank(userDTO.getFullName())) {
			userDTO.addError("Name can't be empty");
		}
	}

	private void validatePassword(UserDTO userDTO) {
		if (StringUtils.isBlank(userDTO.getPassword()) && userDTO.getId()==null) {
			userDTO.addError("Password can't be empty");
		}
	}

}
