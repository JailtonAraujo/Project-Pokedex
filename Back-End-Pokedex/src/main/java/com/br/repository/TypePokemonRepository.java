package com.br.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.br.model.TypePokemon;

@Transactional
@Repository
public interface TypePokemonRepository extends JpaRepository<TypePokemon, Integer>{

	@Query(value = "select t from TypePokemon t where t.type = ?1")
	public Optional<TypePokemon> findByTypeName (String type);
}
