package com.br.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	public ResponseEntity<Pokemon> save(@RequestBody Pokemon pokemon) {

		pokemonService.savePokemon(pokemon);

		return new ResponseEntity<Pokemon>(HttpStatus.OK);
	}

	@GetMapping("/")
	public ResponseEntity<List<Pokemon>> getAll() {

		return new ResponseEntity<List<Pokemon>>(pokemonRepository.findAll(), HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Pokemon> delete(@PathVariable(name = "id") Integer id, HttpServletResponse response) {

		pokemonRepository.deleteById(id);

		return new ResponseEntity<Pokemon>(HttpStatus.OK);
	}

	@GetMapping("/fbname/{name}")
	public ResponseEntity<Pokemon> findByName(@PathVariable(name = "name") String name) {

		HttpStatus httpStatus = null;

		Optional<Pokemon> optional = pokemonRepository.findByName(name);

		if (optional.isPresent()) {
			return new ResponseEntity<Pokemon>(optional.get(), HttpStatus.OK);
		}

		return new ResponseEntity<Pokemon>(HttpStatus.NOT_FOUND);

	}

}
