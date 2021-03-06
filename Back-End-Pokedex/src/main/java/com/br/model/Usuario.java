package com.br.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Usuario implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String name;

	private String username;

	private String password;

	@ManyToMany(fetch = FetchType.EAGER)
	private List<Role> roles;

//	@ManyToMany
//	private List<Pokemon> pokemons;
	
	public Usuario(Integer id, String username, String password) {
		this.id = id;
		this.username = username;
		this.password = password;
	}
	
	

}
