package com.shivamone.maystore.enity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="may_product")
@Setter
@Getter
@ToString
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="product_name")
	private String productName;
	
	@Column(name="product_desc")
	private String productDesc;
	
	@Column(name="brand_name")
	private String brandName;
	
	@Column(name="unit_price")
	private BigDecimal unitPrice;
	
	@Column(name="img_url")
	private String imgUrl;
	
	@Column(name="unit_in_stock")
	private int unitInStock;
	
	@Column(name="created_date")
	private Date createdOn;
	
	@Column(name="last_updated_date")
	private Date updatedOn;
	
	@ManyToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name="category_id")
	private ProductCategory productCategory;
	
	
}
