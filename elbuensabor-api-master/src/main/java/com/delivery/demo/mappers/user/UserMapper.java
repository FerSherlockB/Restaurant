package com.delivery.demo.mappers.user;

import java.util.Collection;

import org.mapstruct.Mapper;

import com.delivery.demo.DTO.user.*;
import com.delivery.demo.entity.user.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

	public UserDTO toUserDTO(User user);

	public User toUser(UserDTO userDTO);

	public Collection<UserDTO> toUserDTOs(Collection<User> users);

}