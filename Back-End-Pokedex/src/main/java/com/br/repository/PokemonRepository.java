package com.br.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.br.model.Pokemon;

@Transactional
@Repository
public interface PokemonRepository extends JpaRepository<Pokemon, Integer>{

	@Query(value="select pokemon.* from pokemon inner join usuario_pokemons on pokemon.id = usuario_pokemons.pokemons_id where usuario_pokemons.usuario_id = ?1 and pokemon.name = ?2", nativeQuery = true)
	public Optional<Pokemon> findByName(String userId, String name);
	
	@Query(value = "select count(1) from pokemon where id_pokemon = ?1", nativeQuery = true)
	public Integer existsByIdPokemon(int idPokemon);
	
	@Query(value="select p from Pokemon p where p.idPokemon = ?1")
	public Pokemon findByPokemonId(Integer idPokemon);
	
	@Query(value="select pokemon.* from pokemon inner join usuario_pokemons on pokemon.id = usuario_pokemons.pokemons_id where usuario_pokemons.usuario_id = ?1 order by id_pokemon limit 20", nativeQuery = true)
	public List<Pokemon>findAllByUserId(String userID);
	
	@Query(value = "select count(1) from pokemon inner join usuario_pokemons on pokemon.id = usuario_pokemons.pokemons_id where usuario_pokemons.usuario_id = ?1", nativeQuery = true)
	public Integer countByUserId(String userId);
	
	@Modifying
	@Query(value="insert into usuario_pokemons (usuario_id, pokemons_id) values (?1, ?2)", nativeQuery = true)
	public void savePokemon(String idUser, int IdPokemon);
	
	@Query(value = "select pokemon.* from pokemon inner join usuario_pokemons on pokemon.id = usuario_pokemons.pokemons_id where usuario_pokemons.usuario_id = ?1 order by id_pokemon limit 4 offset ?2", nativeQuery = true)
	public List<Pokemon> loadMore(String idUSer, Integer offset);
	
	@Modifying
	@Query(value = "delete from usuario_pokemons where usuario_id = ?1 and pokemons_id = ?2", nativeQuery = true)
	public void deleteByUserIdAndPokemonId(String idUser, Integer pokemonId);
}
