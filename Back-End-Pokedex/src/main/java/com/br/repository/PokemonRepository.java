package com.br.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.br.model.Pokemon;

@Transactional
@Repository
public interface PokemonRepository extends JpaRepository<Pokemon, Integer>{

	@Query("select p from Pokemon p where p.name = ?1")
	public Optional<Pokemon> findByName(String name);
}
