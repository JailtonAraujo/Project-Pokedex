package com.br.data;

import java.util.Collection;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;

import com.br.model.Role;
import com.br.model.Usuario;

public class UserDatailsData implements UserDetails{
	
	private static final long serialVersionUID = 1L;
	
	private final Optional<Usuario> usuario;
	
	public UserDatailsData(Optional<Usuario> usuario) {
		this.usuario = usuario;
	}

	@Override
	public Collection<Role> getAuthorities() {
		
		return this.usuario.orElse(new Usuario()).getRoles();
	}

	@Override
	public String getPassword() {
		
		return this.usuario.orElse(new Usuario()).getPassword();
	}

	@Override
	public String getUsername() {
		return this.usuario.orElse(new Usuario()).getUsername();
	}
	
	public String getId() {
		return this.usuario.orElse(new Usuario()).getId().toString();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
