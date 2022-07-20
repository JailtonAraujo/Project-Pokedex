package com.br;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class BackEndPokedexApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndPokedexApplication.class, args);
	}

}
