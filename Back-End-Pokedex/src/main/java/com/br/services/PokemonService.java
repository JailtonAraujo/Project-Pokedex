package com.br.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.br.model.Pokemon;
import com.br.model.TypePokemon;
import com.br.repository.PokemonRepository;
import com.br.repository.TypePokemonRepository;

@Service
public class PokemonService {

	@Autowired
	private PokemonRepository pokemonRepository;

	@Autowired
	private TypePokemonRepository typePokemonRepository;

	public void savePokemon(Pokemon pokemon, String idUser) {

		if (pokemonRepository.existsByIdPokemon(pokemon.getIdPokemon()) == 0 ) {

			for (int i = 1; i <= pokemon.getTypes().size(); i++) {

				Optional<TypePokemon> optional = typePokemonRepository
						.findByTypeName(pokemon.getTypes().get(i - 1).getType());

				if (optional.isPresent()) {
					pokemon.getTypes().get(i - 1).setId(optional.get().getId());

				} else {
					pokemon.getTypes().get(i - 1)
							.setId(typePokemonRepository.save(pokemon.getTypes().get(i - 1)).getId());
				}
			}

			//IF THE POKEMON NOT EXISTS IN DATA BASE, SAVE POKEMON AND RETURN YOUR DATA AND SAVE IN THE TABLE usuario_pokemons//
		    pokemonRepository.savePokemon(idUser, pokemonRepository.save(pokemon).getId());
		}
		
		//IF THE POKEMON EXISTS IN DATA BASE, FIND YOUR ID AND SAVE IN THE TABLE usuario_pokemons//
		pokemonRepository.savePokemon(idUser, pokemonRepository.findByPokemonId(pokemon.getIdPokemon()).getId());
		
	}
	
	public Page<Pokemon> FindAllByUserId(String userID){
		
		org.springframework.data.domain.Pageable pageable = PageRequest.of(0, 2);
		
		Page<Pokemon> page = new PageImpl<Pokemon>(pokemonRepository.findAllByUserId(userID), pageable , pokemonRepository.countByUserId(userID));
		
		return page;
		
	}
	
	public Page<Pokemon> loadMore(String idUser, int offset){
		
		Page<Pokemon> page = new PageImpl<Pokemon>(pokemonRepository.loadMore(idUser, offset));
		
		return page;
	}
}
