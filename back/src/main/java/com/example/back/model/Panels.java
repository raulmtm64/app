package com.example.back.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "panels")
public class Panels {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_panel;

    @Column(name = "panel_nom", unique = false, nullable = false)
    private String panel_nom;
    
    @Column(name="id_owner", unique = false, nullable = false)
    private int id_owner;

    @Column(name="id_group_owner", unique = false, nullable = false)
    private int id_group_owner;

    public Panels () {}

    public Panels (String panel_nom, int id_owner, int id_group_owner) {
        this.panel_nom = panel_nom;
        this.id_owner = id_owner;
        this.id_group_owner = id_group_owner;
    }

    //GETTERS Y SETTERS
    public String getPanelNom () { return panel_nom; }
    public void setPanelNom ( String panel_nom ) { this.panel_nom = panel_nom; }

    public int getListIdOwner () { return id_owner; }
    public void setListIdOwner ( int id_owner ) { this.id_owner = id_owner; }

    public int getListIdGroupOwner () { return id_group_owner; }
    public void setListIdGroupOwner ( int id_group_owner ) { this.id_group_owner = id_group_owner; }
}
