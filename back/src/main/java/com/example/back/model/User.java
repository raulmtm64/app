package com.example.back.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_user;

    @Column(name = "nick", unique = false, nullable = false)
    private String nick;
    
    @Column(name="first_name_user", unique = false, nullable = false)
    private String first_name_user;

    @Column(name="surname_user", unique = false, nullable = false)
    private String surname_user;

    @Column(name = "password", unique = false, nullable = false)
    private String password;

    @Column(name="email", unique = false, nullable = false)
    private String email;

    @Lob
    @Column(name="avatar", unique = false, nullable = false)
    private byte[] avatar;

    @Enumerated(EnumType.STRING) 
    @Column(name = "typeof", nullable = false)
    private UserRole typeof;

    public User() {}

    public User(String nick, String first_name_user, String surname_user, String password, String email, byte[] avatar, UserRole typeof) {
        this.nick = nick;
        this.first_name_user = first_name_user;
        this.surname_user = surname_user;
        this.password = password;
        this.email = email;
        this.avatar = avatar;
        this.typeof = typeof;
    }

    // Getters y setters
    public String getNick() { return nick; }
    public void setNick(String nick) { this.nick = nick; }

    public String getFirst_name_user(){ return first_name_user; }
    public void setFirst_name_user(String first_name_user){ this.first_name_user = first_name_user; }

    public String getSurname_user(){ return surname_user; }
    public void setSurname_user(String surname_user){ this.surname_user = surname_user; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public byte[] getAvatar() { return avatar; }
    public void setAvatar(byte[] avatar) { this.avatar = avatar; }

    public UserRole getTypeOf() { return typeof; }
    public void setTypeOf(UserRole typeof) { this.typeof = typeof; }
}