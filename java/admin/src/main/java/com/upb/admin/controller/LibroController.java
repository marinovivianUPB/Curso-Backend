package com.upb.admin.controller;

import com.upb.admin.models.Libro;
import com.upb.admin.models.User;
import com.upb.admin.services.LibroService;
import com.upb.admin.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/libros")
public class LibroController {

    @Qualifier("libroServiceImpl")
    @Autowired
    private LibroService libroService;

    @PostMapping
    public Libro save(@RequestBody Libro libro) {
        return libroService.save(libro);
    }

    /*@GetMapping
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
    }*/
}
