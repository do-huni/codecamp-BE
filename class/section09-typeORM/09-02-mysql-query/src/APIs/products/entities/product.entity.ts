import {Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductSalesLocation } from "../../productsSalesLocations/entities/productSalesLocation.entity";
import { ProductCategory } from "../../productsCategories/entities/productCategory.entity"
import { User } from "../../users/entities/user.entity";
import { ProductTag } from "../../productsTags/entities/productTag.entity";

@Entity()
export class Product{
	@PrimaryGeneratedColumn("uuid")
	id: string
	
	@Column()
	name: string
	
	@Column()
	description: string
	
	@Column()
	price: number
	
	@Column({default: false})
	isSoldout: boolean
	
	@JoinColumn()
	@OneToOne(()=>ProductSalesLocation )
	productSalesLocation: ProductSalesLocation
	
	@ManyToOne(()=>ProductCategory)
	productCategory: ProductCategory
	
	@ManyToOne(()=> User)
	user: User

	@JoinTable()
	@ManyToMany(() => ProductTag, (productTags) => productTags.products)
	productTags: ProductTag[];	
	
}
