package com.br.security;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

public class JWTValidationFilter extends BasicAuthenticationFilter {

	public static final String HEADER_KEY = "Authorization";

	public static final String HEADER_PREFIX = "Bearer ";

	public JWTValidationFilter(AuthenticationManager authenticationManager) {
		super(authenticationManager);
	}
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		String token = request.getHeader(HEADER_KEY);
		
		if(token == null || token.trim().isEmpty() || !token.startsWith(HEADER_PREFIX)) {
		chain.doFilter(request, response);
		return;
		}
		
		String tokenClear = token.replace(HEADER_PREFIX, "");
		
		UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = getAuthenticationToken(tokenClear);
		
		SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
		
		chain.doFilter(request, response);
		
	}
	
	private UsernamePasswordAuthenticationToken getAuthenticationToken(String token) {
		
		String Username = JWT.require(Algorithm.HMAC512(JWTAuthenticationFilter.SECRET))
				.build().verify(token)
				.getSubject();
		
		if(Username == null) {
			return null;
		}
		
		return new UsernamePasswordAuthenticationToken(Username, null, new ArrayList<>()); //Provavelmente vai dar pau quando verivicar pelas credenciais...//
		
	}

}
