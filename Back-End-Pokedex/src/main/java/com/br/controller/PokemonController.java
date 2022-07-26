package com.br.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.model.Pokemon;
import com.br.repository.PokemonRepository;
import com.br.services.PokemonService;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

	@Autowired
	private PokemonRepository pokemonRepository;

	@Autowired
	private PokemonService pokemonService;

	@PostMapping(value = "/")
	public ResponseEntity<Pokemon> save(@RequestBody Pokemon pokemon, @AuthenticationPrincipal String idUser) {

		try {
			pokemonService.savePokemon(pokemon, idUser);
		} catch (Exception e) {
			return new ResponseEntity<Pokemon>(HttpStatus.BAD_REQUEST);
		}
		

		return new ResponseEntity<Pokemon>(HttpStatus.CREATED);
	}

	@GetMapping("/")
	public ResponseEntity<Page<Pokemon>> getAll(@AuthenticationPrincipal String logado) {

		return new ResponseEntity<Page<Pokemon>>(pokemonService.FindAllByUserId(logado), HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Pokemon> delete(@PathVariable(name = "id") Integer id,
			@AuthenticationPrincipal String idUser) {

		pokemonRepository.deleteByUserIdAndPokemonId(idUser, id);

		return new ResponseEntity<Pokemon>(HttpStatus.OK);
	}

	@GetMapping("/fbname/{name}")
	public ResponseEntity<Pokemon> findByName(@PathVariable(name = "name") String name,
			@AuthenticationPrincipal String idUSer) {

		Optional<Pokemon> optional = pokemonRepository.findByName(idUSer, name);

		if (optional.isPresent()) {
			return new ResponseEntity<Pokemon>(optional.get(), HttpStatus.OK);
		}

		return new ResponseEntity<Pokemon>(HttpStatus.NOT_FOUND);

	}

	@GetMapping("/loadmore/{offset}")
	public ResponseEntity<List<Pokemon>> loadMore(@PathVariable(name = "offset") int offset,
			@AuthenticationPrincipal String idUser) {

		return new ResponseEntity<List<Pokemon>>(pokemonRepository.loadMore(idUser, offset), HttpStatus.OK);

	}

}
