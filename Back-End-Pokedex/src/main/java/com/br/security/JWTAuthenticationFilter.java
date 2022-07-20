package com.br.security;

import java.io.IOException;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.br.data.UserDatailsData;
import com.br.model.Usuario;
import com.br.DTO.UsuarioDTO;
import com.br.repository.UsuarioRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private final AuthenticationManager authenticationManager;
	
	
	private final UsuarioRepository usuarioRepository;

	private final static long TOKEN_EXPIRATION = 600000L;

	public final static String SECRET = "bc8a8a3e-b490-4e82-9a76-687d6aec8746";

	public JWTAuthenticationFilter(AuthenticationManager authenticationManager, UsuarioRepository usuarioRepository) {
		this.authenticationManager = authenticationManager;
		this.usuarioRepository = usuarioRepository;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {

		try {

			Usuario usuario = new ObjectMapper().readValue(request.getInputStream(), Usuario.class);

			return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(usuario.getUsername(),
					usuario.getPassword(), usuario.getRoles()));

		} catch (IOException e) {
			throw new RuntimeException("Error authentication User", e);
		}

	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		
		UserDatailsData userDatailsData = (UserDatailsData) authResult.getPrincipal();
		
		String token = JWT.create()
				.withSubject(userDatailsData.getUsername())
				.withExpiresAt(new Date( System.currentTimeMillis() + TOKEN_EXPIRATION))
				.sign(Algorithm.HMAC512(SECRET));
		
		
	    Usuario usuario = usuarioRepository.findByUsername(userDatailsData.getUsername()).get();
	    
	    UsuarioDTO userDTO = new UsuarioDTO().builder().id(usuario.getId()).name(usuario.getName()).roles(usuario.getRoles()).token(token).typeToken("Bearer").build();
	    
	    response.getWriter().write(new ObjectMapper().writeValueAsString(userDTO));
	    response.getWriter().flush();
		
	}
	
	
}
