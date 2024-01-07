import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { ObjectType, Field, Int, Float} from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User{
	@PrimaryGeneratedColumn("uuid")
	@Field(()=> String)
	id: string
	
	@Column()
	@Field(()=> String)
	name: string
	
	@Column()
	@Field(()=> String)
	email: string	
}