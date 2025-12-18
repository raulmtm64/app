package com.example.back.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "lists")
public class Lists {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_list;

    @Column(name = "list_nom", unique = false, nullable = false)
    private String list_nom;
    
    @Column(name="list_descrip", unique = false, nullable = false)
    private String list_descrip;

    @Column(name="id_panel", unique = false, nullable = false)
    private int id_panel;

    public Lists () {}

    public Lists (String list_nom, String list_descrip, int id_panel) {
        this.list_nom = list_nom;
        this.list_descrip = list_nom;
        this.id_panel = id_panel;
    }

    //GETTERS Y SETTERS
    public String getListNom () { return list_nom; }
    public void setListNom ( String list_nom ) { this.list_nom = list_nom; }

    public String getListDescrip () { return list_descrip; }
    public void setListDescrip ( String list_descrip ) { this.list_descrip = list_descrip; }

    public int getListIdPanel () { return id_panel; }
    public void setListIdPanel ( int id_panel ) { this.id_panel = id_panel; }
}
