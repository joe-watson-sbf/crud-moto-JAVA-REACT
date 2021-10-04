package com.sofkau.moto.model;

import lombok.Data;
import javax.persistence.*;

@Table(name = "motors")
@Data
@Entity
public class Moto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer identificacion;
    private String nombre;
    private String year;
    private String apariencia;
    private String link;
    private String comment;

}
