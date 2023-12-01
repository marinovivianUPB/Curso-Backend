package com.upb.admin.services;

import com.upb.admin.models.Libro;
import com.upb.admin.models.User;

import java.util.List;

public interface LibroService {
    Libro save(Libro libro);

    Libro getById(String id);

    List<Libro> getAll();

    Libro deleteById(String id);
}
