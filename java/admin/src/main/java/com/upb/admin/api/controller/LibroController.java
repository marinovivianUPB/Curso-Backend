package com.upb.admin.api.controller;

import com.upb.admin.domain.models.Libro;
import com.upb.admin.app.services.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

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
