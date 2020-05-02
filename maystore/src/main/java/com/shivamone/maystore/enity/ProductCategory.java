package com.shivamone.maystore.enity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="may_product_category")
@Setter
@Getter
@ToString
public class ProductCategory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="category_name")
	private String categoryName;
	
	@OneToMany(cascade = {CascadeType.ALL}, mappedBy = "productCategory")
	private Set<Product> product;
	

}
