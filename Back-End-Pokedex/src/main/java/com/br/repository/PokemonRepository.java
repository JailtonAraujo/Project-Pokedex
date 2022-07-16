package com.br.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.br.model.Pokemon;

@Transactional
@Repository
public interface PokemonRepository extends JpaRepository<Pokemon, Integer>{

}
