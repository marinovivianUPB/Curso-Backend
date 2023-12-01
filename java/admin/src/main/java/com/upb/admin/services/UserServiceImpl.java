package com.upb.admin.services;

import com.upb.admin.error.UserNotFoundException;

import com.upb.admin.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    List<User> userList = new ArrayList<>();
    @Override
    public User save(User user) {
        if(user.getId() == null) {
            user.setId(UUID.randomUUID().toString());
        }
        userList.add(user);
        return user;
    }

    @Override
    public User getById(String id) {
        return userList
                .stream()
                .filter(employee -> employee.getId().equalsIgnoreCase(id))
                .findFirst()
                .orElseThrow(() -> new UserNotFoundException("User not found with ID "+id));
    }

    @Override
    public List<User> getAll() {
        return userList;
    }

    @Override
    public User deleteById(String id) {
        User toBeDeleted = userList.stream()
                .filter(employee -> employee.getId().equalsIgnoreCase(id))
                .findFirst()
                .orElseThrow(() -> new UserNotFoundException("User not found with ID "+id));
        userList.remove(toBeDeleted);
        return toBeDeleted;
    }


}
