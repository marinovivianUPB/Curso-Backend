package com.upb.admin.api.controller;

import com.upb.admin.domain.models.User;
import com.upb.admin.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserV2Controller {

    @Qualifier("userServiceV2Impl")
    @Autowired
    private UserService userService;

    @PostMapping
    public User save(@RequestBody User employee) {
        return userService.save(employee);
    }

    @GetMapping
    public List<User> getUsers(){
        return userService.getAll();
    }

    @DeleteMapping("/{id}")
    public User deleteUserById(@PathVariable String id){
        return userService.deleteById(id);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable String id) {
        return userService.getById(id);
    }
}
