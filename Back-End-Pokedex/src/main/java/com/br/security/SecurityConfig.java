package com.br.security;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.br.repository.UsuarioRepository;
import com.br.services.ImplUSerDatailsService;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	private final ImplUSerDatailsService implUSerDatailsService;
	
	private final UsuarioRepository usuarioRepository;

	public SecurityConfig(ImplUSerDatailsService implUSerDatailsService, UsuarioRepository usuarioRepository) {
		this.implUSerDatailsService = implUSerDatailsService;
		this.usuarioRepository = usuarioRepository;
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		auth.userDetailsService(implUSerDatailsService).passwordEncoder(new BCryptPasswordEncoder());
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		.antMatchers(HttpMethod.POST,"/login").permitAll()
		.antMatchers(HttpMethod.POST,"/user/").permitAll()
		.anyRequest().authenticated()
		
		.and().cors().and().csrf().disable()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		
		.and()
		.addFilter(new JWTAuthenticationFilter(authenticationManager(), usuarioRepository ))
		.addFilter(new JWTValidationFilter(authenticationManager()));
	}
	
}
