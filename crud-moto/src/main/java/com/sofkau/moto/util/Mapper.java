package com.sofkau.moto.util;


import com.sofkau.moto.dto.MotoDTO;
import com.sofkau.moto.model.Moto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class Mapper {
    public MotoDTO entityToDTO(Optional<Moto> moto){
        MotoDTO motoDTO = new MotoDTO();
        moto.ifPresent(data -> {
            motoDTO.setMarca(data.getNombre());
            motoDTO.setMatricula(data.getIdentificacion());
            motoDTO.setColor(data.getApariencia());
            motoDTO.setModelo(data.getYear());
            motoDTO.setUrl(data.getLink());
            motoDTO.setDescription(data.getComment());
        });
        return motoDTO;
    }

    public Moto DtoToEntitySave(MotoDTO motoDTO){
        Moto moto = new Moto();
        moto.setApariencia(motoDTO.getColor());
        moto.setNombre(motoDTO.getMarca());
        moto.setYear(motoDTO.getModelo());
        moto.setLink(motoDTO.getUrl());
        moto.setComment(motoDTO.getDescription());
        return moto;
    }

    public Moto DtoToEntityUpdate(MotoDTO motoDTO){
        Moto moto = new Moto();
        moto.setIdentificacion(motoDTO.getMatricula());
        moto.setApariencia(motoDTO.getColor());
        moto.setNombre(motoDTO.getMarca());
        moto.setYear(motoDTO.getModelo());
        moto.setLink(motoDTO.getUrl());
        moto.setComment(motoDTO.getDescription());
        return moto;
    }

    public List<MotoDTO> listEntityToListDTO(Iterable<Moto> motos){
        List<MotoDTO> motoDTOList = new ArrayList<>();
        motos.forEach(moto -> motoDTOList.add(entityToDTO(Optional.ofNullable(moto))));
        return motoDTOList;
    }

}
