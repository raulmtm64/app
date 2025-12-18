package com.example.back.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "tasks")
public class Tasks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_task;

    @Column(name = "task_nom", unique = false, nullable = false)
    private String task_nom;
    
    @Column(name="task_descrip", unique = false, nullable = false)
    private String task_descrip;

    @Column(name="task_creation_dt", unique = false, nullable = false)
    private LocalDate task_creation_dt;

    @Column(name="task_expiration_dt", unique = false, nullable = false)
    private LocalDate task_expiration_dt;

    @Column(name="task_bg_color", unique = false, nullable = false)
    private String task_bg_color;

    @Column(name="id_list", unique = false, nullable = false)
    private int id_list;

    @Column(name = "task_owner", unique = false, nullable = false)
    private int task_owner;

    public Tasks() {}

    public Tasks(String task_nom, String task_descrip, LocalDate task_creation_dt, LocalDate task_expiration_dt, String task_bg_color, int id_list, int task_owner){
        this.task_nom = task_nom;
        this.task_descrip = task_descrip;
        this.task_creation_dt = task_creation_dt;
        this.task_expiration_dt = task_expiration_dt;
        this.task_bg_color = task_bg_color;
        this.id_list = id_list;
        this.task_owner = task_owner;
    }

    //GETTERS Y SETTERS
    public String getTaskNom(){ return task_nom; }
    public void setTaskNom( String task_nom ) { this.task_nom = task_nom; }

    public String getTaskDescrip(){ return task_descrip; }
    public void setTaskDescripDescrip( String task_descrip ) { this.task_descrip = task_descrip; }

    public LocalDate getTaskCreationDt(){ return task_creation_dt; }
    public void setTaskCreationDt( LocalDate task_creation_dt ) { this.task_creation_dt = task_creation_dt; }

    public LocalDate getTaskExpirationDt(){ return task_expiration_dt; }
    public void setTaskExpirationDt( LocalDate task_expiration_dt ) { this.task_expiration_dt = task_expiration_dt; }

    public String getTaskBgColor(){ return task_bg_color; }
    public void setTaskBgColor( String task_bg_color ) { this.task_bg_color = task_bg_color; }

    public int getTaskIdList(){ return id_list; }
    public void setTaskIdList( int id_list ) { this.id_list = id_list; }

    public int getTaskIdOwner(){ return task_owner; }
    public void setTaskIdOwner( int task_owner ) { this.task_owner = task_owner; }
}
