package com.example.project.services;

import com.example.project.models.User;
import com.example.project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){return (List<User>) userRepository.findAll(); }

    public User findUserById(Integer uid) {
        return userRepository.findUserById(uid);
    }

}
