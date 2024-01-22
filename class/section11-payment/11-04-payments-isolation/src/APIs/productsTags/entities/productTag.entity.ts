import {Column, Entity, PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import { Product } from "../../products/entities/product.entity";
import { ObjectType, Field, Int, Float} from '@nestjs/graphql';

@Entity()
@ObjectType()
export class ProductTag{
	@PrimaryGeneratedColumn("uuid")
	@Field(()=> String)
	id: string
	
	@Column()
	@Field(()=> String)
	name: string	

	@ManyToMany(() => Product, (products) => products.productTags)
	@Field(()=> [Product])
	products: Product[];
}