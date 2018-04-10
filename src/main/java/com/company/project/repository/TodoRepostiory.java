package com.company.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.company.project.beans.Items;

@Repository
public interface TodoRepostiory extends JpaRepository<Items, Integer> {

}
