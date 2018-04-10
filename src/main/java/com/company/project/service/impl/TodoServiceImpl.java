package com.company.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.company.project.beans.Items;
import com.company.project.repository.TodoRepostiory;
import com.company.project.service.TodoService;

@Service("todoService")
@Component
public class TodoServiceImpl implements TodoService {

	@Autowired
	private TodoRepostiory repository;

	@Override
	public List<Items> getAllItems() {
		return repository.findAll();
	}

	@Override
	public Items findById(int id) {
		return (id >= 0) ? repository.getOne(id) : null;
	}

	@Override
	public boolean isItemExists(Items item) {
		return (item != null) ? repository.exists(item.getId()) : false;
	}

	@Override
	public void saveItem(Items item) {
		if (item != null)
			repository.save(item);
	}

	@Override
	public void updateItem(Items currentItem) {
		if (currentItem != null)
			saveItem(currentItem);
	}

	@Override
	public void deleteItem(int id) {
		if (id >= 0)
			repository.delete(id);
	}

	@Override
	public void deleteAllItems() {
		repository.deleteAll();
	}

}
