package com.sofkau.moto.repository;

import com.sofkau.moto.model.Moto;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MotoRepos extends CrudRepository<Moto, Integer> {
}
