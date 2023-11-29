package com.upb.projecttwo.services;

import com.upb.projecttwo.models.Deparment;
import com.upb.projecttwo.models.Employee;

import java.util.List;

public interface DeparmentService {
    Deparment save(Deparment deparment);

    Deparment getDeparmentById(String id);

    List<Deparment> getAllDeparments();

    Deparment deleteById(String id);
}
