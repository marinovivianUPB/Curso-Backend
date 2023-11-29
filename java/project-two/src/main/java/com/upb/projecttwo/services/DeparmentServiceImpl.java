package com.upb.projecttwo.services;

import com.upb.projecttwo.error.EmployeeNotFoundException;
import com.upb.projecttwo.models.Deparment;
import com.upb.projecttwo.models.Employee;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class DeparmentServiceImpl implements DeparmentService{

    List<Deparment> deparmentList = new ArrayList<>();
    @Override
    public Deparment save(Deparment deparment) {
        if(deparment.getId() == null) {
            deparment.setId(UUID.randomUUID().toString());
        }
        deparmentList.add(deparment);
        return deparment;
    }

    @Override
    public Deparment getDeparmentById(String id) {
        return deparmentList
                .stream()
                .filter(employee -> employee.getId().equalsIgnoreCase(id))
                .findFirst()
                .orElseThrow(() -> new EmployeeNotFoundException("Deparment not found with ID "+id));
    }

    @Override
    public List<Deparment> getAllDeparments() {
        return deparmentList;
    }

    @Override
    public Deparment deleteById(String id) {
        Deparment toBeDeleted = deparmentList.stream()
                .filter(employee -> employee.getId().equalsIgnoreCase(id))
                .findFirst()
                .orElseThrow(() -> new EmployeeNotFoundException("Deparment not found with ID "+id));
        deparmentList.remove(toBeDeleted);
        return toBeDeleted;
    }


}
