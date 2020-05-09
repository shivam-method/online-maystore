package com.shivamone.maystore.enity.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.shivamone.maystore.enity.Product;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	@RestResource(path = "categoryId")
	Page <Product> findByProductCategoryId(@Param("id") Integer id, Pageable pageable);

}