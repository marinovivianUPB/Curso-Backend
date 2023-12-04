package com.upb.admin.app.services;

import com.upb.admin.infrastructure.entity.UserEntity;
import com.upb.admin.domain.models.User;
import com.upb.admin.domain.interfaces.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserServiceV2Impl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public User save(User user) {
        if(user.getId() == null) {
            user.setId(UUID.randomUUID().toString());
        }
        UserEntity entity = new UserEntity();
        BeanUtils.copyProperties(user,entity);
        userRepository.save(entity);
        return user;
    }

    @Override
    public User getById(String id) {
        return null;
    }

    @Override
    public List<User> getAll() {
        return null;
    }

    @Override
    public User deleteById(String id) {
        return null;
    }

    /*@Override
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
    }*/


}
