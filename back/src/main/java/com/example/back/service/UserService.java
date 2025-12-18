package com.example.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.back.model.User;
import com.example.back.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean login(String username, String password) {
        User user = userRepository.findByNick(username);

        if (user == null) {
            return false; // No existe el usuario
        }

        return user.getPassword().equals(password); // Aquí luego pondremos hashing
    }
}