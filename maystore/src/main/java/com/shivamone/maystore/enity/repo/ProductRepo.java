package com.shivamone.maystore.enity.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shivamone.maystore.enity.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

}
