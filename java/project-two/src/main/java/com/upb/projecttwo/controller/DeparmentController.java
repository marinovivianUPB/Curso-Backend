package com.upb.projecttwo.controller;

import com.upb.projecttwo.models.Deparment;
import com.upb.projecttwo.models.Employee;
import com.upb.projecttwo.services.DeparmentService;
import com.upb.projecttwo.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/deparments")
public class DeparmentController {

    @Autowired
    private DeparmentService deparmentService;

    @PostMapping
    public Deparment save(@RequestBody Deparment deparment) {
        return deparmentService.save(deparment);
    }

    @GetMapping
    public List<Deparment> getDeparments(){
        return deparmentService.getAllDeparments();
    }

    @DeleteMapping("/{id}")
    public Deparment deleteDeparmentById(@PathVariable String id){
        return deparmentService.deleteById(id);
    }

    @GetMapping("/{id}")
    public Deparment getDeparmentById(@PathVariable String id) {
        return deparmentService.getDeparmentById(id);
    }
}
