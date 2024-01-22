import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductSalesLocation } from "../../productsSalesLocations/entities/productSalesLocation.entity";
import { ProductCategory } from "../../productsCategories/entities/productCategory.entity"
import { User } from "../../users/entities/user.entity";
import { ProductTag } from "../../productsTags/entities/productTag.entity";

@Entity()
@ObjectType()
export class Product{
	@PrimaryGeneratedColumn("uuid")
	@Field(()=> String)
	id: string
	
	@Column()
	@Field(()=> String)	
	name: string
	
	@Column()
	@Field(()=> String)	
	description: string
	
	@Column()
	@Field(()=> Int)	
	price: number
		
	@Column({default: false})
	@Field(()=> Boolean)	
	isSoldout: boolean
	
	@JoinColumn()
	@OneToOne(()=>ProductSalesLocation )
	@Field(()=> ProductSalesLocation)	
	productSalesLocation: ProductSalesLocation
	
	@ManyToOne(()=>ProductCategory)
	@Field(()=> ProductCategory)	
	productCategory: ProductCategory
	
	@ManyToOne(()=> User)
	@Field(()=> User)	
	user: User

	@JoinTable()
	@ManyToMany(() => ProductTag, (productTags) => productTags.products)
	@Field(()=> [ProductTag])	
	productTags: ProductTag[];	
	
	@CreateDateColumn()
	@Field(()=> String)
	createdAt: Date
	
	@UpdateDateColumn()
	@Field(()=> String)
	updatedAt: Date
	
	@DeleteDateColumn()
	@Field(()=> String)
	deletedAt: Date
}
