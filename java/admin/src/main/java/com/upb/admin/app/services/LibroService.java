package com.upb.admin.app.services;

import com.upb.admin.domain.models.Libro;

import java.util.List;

public interface LibroService {
    Libro save(Libro libro);

    Libro getById(String id);

    List<Libro> getAll();

    Libro deleteById(String id);
}
