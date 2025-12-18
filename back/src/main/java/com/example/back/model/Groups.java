package com.example.back.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "groups")
public class Groups {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_group;

    @Column(name = "group_nom", unique = false, nullable = false)
    private String group_nom;
    
    public Groups () {}

    public Groups (String group_nom) {
        this.group_nom = group_nom;
    }

    //GETTERS Y SETTERS
    public String getGroupNom () { return group_nom; }
    public void setGroupNom ( String group_nom ) { this.group_nom = group_nom; }
}
