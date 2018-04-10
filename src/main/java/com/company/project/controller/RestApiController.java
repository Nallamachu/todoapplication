package com.company.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.company.project.beans.Items;
import com.company.project.service.TodoService;

@RestController
@RequestMapping("/api")
public class RestApiController {

	@Autowired
	TodoService service;

	@RequestMapping(value = "/findALL", method = RequestMethod.GET)
	@ResponseBody
	public List<Items> getAllItems() {
		return service.getAllItems();
	}

	@RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Items findById(@PathVariable int id) {
		return service.findById(id);
	}

	@RequestMapping(value = "/delete/{id}", method = { RequestMethod.DELETE })
	@ResponseBody
	public void removeItem(@PathVariable int id) {
		service.deleteItem(id);
	}

	@RequestMapping(value = "/deleteALL", method = { RequestMethod.POST, RequestMethod.GET })
	@ResponseBody
	public void deleteAll() {
		service.deleteAllItems();
	}

	// Item should pass through URI(POST/GET) in Web application
	@RequestMapping(value = "/save", method = { RequestMethod.POST, RequestMethod.GET }, produces = "application/json")
	@ResponseBody
	public void createItem(@RequestBody Items item) {
		try {
			service.saveItem(item);
		} catch (Exception e) {
			System.out.println("Item not saved ");
		}
	}

	@RequestMapping(value = "/update/{id}", method = { RequestMethod.POST, RequestMethod.GET }, produces = "application/json")
	@ResponseBody
	public void editItem(@RequestBody Items item) {
		try {
			service.saveItem(item);
		} catch (Exception e) {
			System.out.println("Item not updated");
		}
	}
}
