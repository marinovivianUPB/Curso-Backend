package com.upb.admin.app.services;

import com.upb.admin.domain.models.User;

import java.util.List;

public interface UserService {
    User save(User user);

    User getById(String id);

    List<User> getAll();

    User deleteById(String id);
}
