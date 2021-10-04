package com.sofkau.moto.services;

import com.sofkau.moto.dto.MotoDTO;
import com.sofkau.moto.repository.MotoRepos;
import com.sofkau.moto.util.Mapper;
import com.sofkau.moto.util.Respuesta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MotoServiceImp implements MotoServiceInterface{

    @Autowired
    private MotoRepos motoRepos;
    @Autowired
    private Mapper mapper;

    @Override
    public Respuesta save(MotoDTO motoDTO) {
        motoRepos.save(mapper.DtoToEntitySave(motoDTO));
        return new Respuesta("Guardado exitosamente!");
    }

    @Override
    public Iterable<MotoDTO> getAll() {
        return mapper.listEntityToListDTO(motoRepos.findAll());
    }

    @Override
    public MotoDTO getById(int id) throws Exception {
        if(motoRepos.existsById(id)){
            return mapper.entityToDTO(motoRepos.findById(id));
        }
       throw new Exception("No existe registro con el "+ id);
    }

    @Override
    public Respuesta delete(int id) throws Exception {
        if(motoRepos.existsById(id)){
            motoRepos.deleteById(id);
            return new Respuesta("Borrado exitosamente!");
        }
        throw new Exception("No existe registro con el "+ id);
    }

    @Override
    public Respuesta update(MotoDTO motoDTO) throws Exception {
        if(motoRepos.existsById(motoDTO.getMatricula())){
            motoRepos.save(mapper.DtoToEntityUpdate(motoDTO));
            return new Respuesta("Actualizado exitosamente!");
        }
        throw new Exception("No existe registro con el "+ motoDTO.getMatricula());
    }

}
