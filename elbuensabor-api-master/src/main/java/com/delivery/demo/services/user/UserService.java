package com.delivery.demo.services.user;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.delivery.demo.defaulters.*;
import com.delivery.demo.entity.user.User;
import com.delivery.demo.DTO.user.*;
import com.delivery.demo.mappers.user.*;
import com.delivery.demo.repositories.user.UserRepository;
import com.delivery.demo.validation.*;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private UserValidator userValidator;
	@Autowired
	private UserDefaulter userDefaulter;

	public Collection<UserDTO> findAll() {
		Collection<User> users = userRepository.findAll();
		return userMapper.toUserDTOs(users);
	}

	public Collection<UserDTO> findAll(UserDTO userDTO) {
		User user = userMapper.toUser(userDTO);
		Example<User> example = Example.of(user);
		Collection<User> users = userRepository.findAll(example);
		return userMapper.toUserDTOs(users);
	}

	public Optional<UserDTO> findById(long id) {
		Optional<User> user = userRepository.findById(id);
		if (user.isPresent()) {
			return Optional.of(userMapper.toUserDTO(user.get()));
		}
		return Optional.empty();
	}

	public Optional<UserDTO> findByEmail(String email) {
		Optional<User> user = userRepository.findByEmail(email);
		if (user.isPresent()) {
			return Optional.of(userMapper.toUserDTO(user.get()));
		}
		return Optional.empty();
	}

	public boolean existsById(Long id) {
		return userRepository.existsById(id);
	}

	@Transactional
	public UserDTO save(UserDTO userDTO) {
		userDefaulter.populateDefaults(userDTO);
		userValidator.validate(userDTO);
		if (userDTO.hasErrors()) {
			return userDTO;
		}
		User user = userRepository.save(userMapper.toUser(userDTO));
		return userMapper.toUserDTO(user);
	}

	@Transactional
	public void deleteById(Long userId) {
		userRepository.deleteById(userId);
	}

}
