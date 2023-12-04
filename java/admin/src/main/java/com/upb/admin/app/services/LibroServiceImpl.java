package com.upb.admin.app.services;

import com.upb.admin.infrastructure.entity.LibroEntity;
import com.upb.admin.domain.models.Libro;
import com.upb.admin.domain.interfaces.LibroRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class LibroServiceImpl implements LibroService {

    @Autowired
    private LibroRepository libroRepository;
    @Override
    public Libro save(Libro libro) {
        if(libro.getId() == null) {
            libro.setId(UUID.randomUUID().toString());
        }
        LibroEntity entity = new LibroEntity();
        BeanUtils.copyProperties(libro,entity);
        libroRepository.save(entity);
        return libro;
    }

    @Override
    public Libro getById(String id) {
        return null;
    }

    @Override
    public List<Libro> getAll() {
        return null;
    }

    @Override
    public Libro deleteById(String id) {
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
