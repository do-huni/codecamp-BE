import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class ProductCategory{
	@PrimaryGeneratedColumn("uuid")
	@Field(()=> String)
	id: string;
	
	@Column({unique: true})
	@Field(()=> String)
	name: string;
}