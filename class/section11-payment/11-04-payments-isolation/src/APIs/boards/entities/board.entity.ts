import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql'

@Entity()
@ObjectType()
export class Board {
	@PrimaryGeneratedColumn("increment") //increment => AUTO INCREMENT uuid => UUID
	@Field(()=> Int)
	number: number;
	
	@Column()
	@Field(()=>String)
	writer: string;
	
	@Column()
	@Field(()=>String)
	title: string;
	
	@Column()	
	@Field(()=>String)
	contents: string;
}