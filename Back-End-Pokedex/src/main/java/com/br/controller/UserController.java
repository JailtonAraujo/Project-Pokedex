package com.br.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.model.Usuario;
import com.br.repository.UsuarioRepository;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@PostMapping("/")
	public ResponseEntity<Usuario> save(@RequestBody Usuario usuario) {
		
		try {
			
			usuario.setPassword(new BCryptPasswordEncoder().encode(usuario.getPassword()));
			
			this.usuarioRepository.save(usuario);
		} catch (Exception e) {
			return new ResponseEntity<Usuario>(HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<Usuario>(HttpStatus.CREATED);

	}
}
