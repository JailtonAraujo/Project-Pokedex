package com.br.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	public void savePokemon(Pokemon pokemon) {
		
		for (int i = 1; i <= pokemon.getTypes().size();i++) {
			
			Optional<TypePokemon> optional = typePokemonRepository.findByTypeName(pokemon.getTypes().get(i-1).getType());
			
			if(optional.isPresent()) {
				pokemon.getTypes().get(i-1).setId(optional.get().getId());
			
			}else {
				 pokemon.getTypes().get(i-1).setId(typePokemonRepository.save(pokemon.getTypes().get(i-1)).getId());
			}
		}
		
		pokemonRepository.save(pokemon);
	}
}
