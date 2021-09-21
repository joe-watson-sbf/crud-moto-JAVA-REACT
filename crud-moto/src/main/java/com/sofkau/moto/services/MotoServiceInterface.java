package com.sofkau.moto.services;

import com.sofkau.moto.dto.MotoDTO;
import com.sofkau.moto.util.Respuesta;

import java.util.List;

public interface MotoServiceInterface {

    Respuesta save(MotoDTO motoDTO);

    Iterable<MotoDTO> getAll();

    MotoDTO getById(int id) throws Exception;

    Respuesta delete(int id) throws Exception;

    Respuesta update(MotoDTO motoDTO) throws Exception;

}
