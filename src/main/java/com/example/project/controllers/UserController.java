package com.example.project.controllers;

import com.example.project.models.User;
import com.example.project.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    UserService service;
    @GetMapping("/api/users")
    public List<User> findAllUsers(){
        return service.getAllUsers();
    }
    @GetMapping("/api/users/{uid}")
    public User findUserById(@PathVariable("uid") Integer uid){
        return service.findUserById(uid);
    }
}
