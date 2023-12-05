package com.upb.projecttwo.services;

import com.upb.projecttwo.entity.EmployeeEntity;
import com.upb.projecttwo.models.Employee;
import com.upb.projecttwo.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class EmployeeV2ServiceImpl implements EmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee save(Employee employee) {
        if(employee.getEmployeId() == null) {
            employee.setEmployeId(UUID.randomUUID().toString());
        }
        EmployeeEntity entity  = new EmployeeEntity();
        BeanUtils.copyProperties(employee,entity);
        employeeRepository.save(entity);
        return employee;
    }


    @Override
    public Employee getEmployeeById(String id) {
        EmployeeEntity entity = employeeRepository.findById(id).get();
        Employee model = new Employee();
        BeanUtils.copyProperties(entity, model);
        return model;
    }

    @Override
    public List<Employee> getAllEmployees() {
        return null;
    }

    @Override
    public Employee deleteById(String id) {
        return null;
    }

    /*@Override
    public List<Employee> getAllEmployees() {
        return employeeList;
    }

    @Override
    public Employee deleteById(String id) {
        Employee toBeDeleted = employeeList.stream()
                .filter(employee -> employee.getEmployeId().equalsIgnoreCase(id))
                .findFirst()
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found with ID "+id));
        employeeList.remove(toBeDeleted);
        return toBeDeleted;
    }*/

}
