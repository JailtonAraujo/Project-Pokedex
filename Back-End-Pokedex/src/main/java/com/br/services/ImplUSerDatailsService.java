package com.br.services;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.br.data.UserDatailsData;
import com.br.model.Usuario;
import com.br.repository.UsuarioRepository;

@Component
public class ImplUSerDatailsService implements UserDetailsService{
	
	private final UsuarioRepository usuarioRepository;

	public ImplUSerDatailsService(UsuarioRepository usuarioRepository) {
		this.usuarioRepository = usuarioRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Optional<Usuario> usuario = this.usuarioRepository.findByUsername(username);
		
		if(usuario.isEmpty() || !usuario.isPresent()) {
			throw new UsernameNotFoundException("User ["+username+"] not found!");
		}
		
		return new UserDatailsData(usuario);
	}

}
