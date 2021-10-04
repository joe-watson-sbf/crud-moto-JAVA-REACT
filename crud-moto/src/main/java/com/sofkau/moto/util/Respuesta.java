package com.sofkau.moto.util;

import lombok.Data;

@Data
public class Respuesta {
    private String message;

    public Respuesta(String message) {
        this.message = message;
    }
}
