package com.company.project.service;

import java.util.List;

import com.company.project.beans.Items;

public interface TodoService {

	List<Items> getAllItems();

	Items findById(int id);

	boolean isItemExists(Items item);

	void saveItem(Items item);

	void updateItem(Items currentItem);

	void deleteItem(int id);

	void deleteAllItems();

}
