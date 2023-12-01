package com.upb.admin.controller;

import com.upb.admin.models.User;
import com.upb.admin.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v2/users")
public class UserV2Controller {

    @Qualifier("userServiceV2Impl")
    @Autowired
    private UserService userService;

    @PostMapping
    public User save(@RequestBody User employee) {
        return userService.save(employee);
    }

    @GetMapping
    public List<User> getEmployees(){
        return userService.getAll();
    }

    @DeleteMapping("/{id}")
    public User deleteEmployeeById(@PathVariable String id){
        return userService.deleteById(id);
    }

    @GetMapping("/{id}")
    public User getEmployeeById(@PathVariable String id) {
        return userService.getById(id);
    }
}
