package com.br.DTO;

import com.br.model.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Integer id;
	
	private String name;
	
	private Set<Role> roles;
	
	private String token;
	
	private String typeToken;
	

}
