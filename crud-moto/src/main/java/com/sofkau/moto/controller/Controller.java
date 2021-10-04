package com.sofkau.moto.controller;

import com.sofkau.moto.dto.MotoDTO;
import com.sofkau.moto.services.MotoServiceInterface;
import com.sofkau.moto.util.Respuesta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;

@RestController
@RequestMapping("api/moto")
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

    @Autowired
    private MotoServiceInterface service;

    @GetMapping
    public Iterable<MotoDTO> getAllMoto(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getMotoById(@PathVariable Integer id) {
        try{
            return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
        }catch (Exception exception){
            return new ResponseEntity<>(new Respuesta(exception.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Respuesta> deleteMoto(@PathVariable Integer id){
        try{
            return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
        }catch (Exception exception){
            return new ResponseEntity<>(new Respuesta(exception.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping
    public ResponseEntity<Respuesta> updateMoto(@RequestBody MotoDTO motoDTO){
        try{
            return new ResponseEntity<>(service.update(motoDTO), HttpStatus.OK);
        }catch (Exception exception){
            return new ResponseEntity<>(new Respuesta(exception.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public Respuesta saveMoto(@RequestBody MotoDTO motoDTO){
        return service.save(motoDTO);
    }


}
