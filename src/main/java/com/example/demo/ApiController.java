package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {
    @GetMapping(value = "/users", produces = "application/json")
    public String getUsers() {
        new User("kingbebop15@gmail.com", "password", "Jeremiah");

        return User.stringify();
    }
}