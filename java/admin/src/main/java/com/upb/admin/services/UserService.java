package com.upb.admin.services;

import com.upb.admin.models.User;

import java.util.List;

public interface UserService {
    User save(User user);

    User getById(String id);

    List<User> getAll();

    User deleteById(String id);
}
