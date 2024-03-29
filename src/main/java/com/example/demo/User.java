package com.example.demo;

import java.util.ArrayList;

public class User {
    final private static ArrayList<User> users = new ArrayList<User>();
    final private String email;
    final private String password;
    final private String name;

    public User(String email, String password, String name) {
        this.email = email;
        this.password = password;
        this.name = name;

        users.add(this);
    }

    public static String stringify() {
        String result = "[";
        for(int i = 0; i < users.size(); i++) {
            result += "{";
            result += "\"email\":\"" + users.get(i).email + "\",";
            result += "\"password\":\"" + users.get(i).password + "\",";
            result += "\"name\":\"" + users.get(i).name + "\"";
            result += "}";
            if(i != users.size() - 1) result += ",";
        }
        return result + "]";
    }
}