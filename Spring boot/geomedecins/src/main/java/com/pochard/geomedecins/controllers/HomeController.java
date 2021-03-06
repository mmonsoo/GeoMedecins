package com.pochard.geomedecins.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping({ "/", "/home" })
public class HomeController {

	@RequestMapping(method = RequestMethod.GET)
	public String showHomePage() {
		return "home";
	}
}
/*
 * // Sert à faire un bean et à dire à Spring que sur toutes ses méthodes il ne
 * doit pas essayer // de chercher un fichier "chaine de caractères" pour en
 * créer un template
 * 
 * @RestController public class HomeController {
 * 
 * public HomeController() { }
 * 
 * // On mappe l'url de Home avec "/"
 * 
 * @RequestMapping("/") public String hello() { return "hello"; }
 * 
 * }
 */
