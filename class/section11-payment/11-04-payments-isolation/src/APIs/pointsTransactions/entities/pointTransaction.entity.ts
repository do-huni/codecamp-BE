import { User } from "../../users/entities/user.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import {ObjectType, Field, Int, registerEnumType} from "@nestjs/graphql"

export enum POINT_TRANSACTION_STATUS_ENUM {
	PAYMENT = "PAYMENT",
	CANCEL = "CANCEL"
}

registerEnumType(POINT_TRANSACTION_STATUS_ENUM,{
	name: "POINT_TRANSACTION_STATUS_ENUM"
})

//insert-only table로 설계
@Entity()
@ObjectType()
export class PointTransaction {
	@PrimaryGeneratedColumn('uuid')
	@Field(()=> String)
	id: string;

	@Column()
	@Field(()=> String)
	impUid: string;
	
	@Column()
	@Field(()=> Int)
	amount: number;
	
	@Column({type: 'enum', enum: POINT_TRANSACTION_STATUS_ENUM})
	@Field(()=> POINT_TRANSACTION_STATUS_ENUM)
	status: POINT_TRANSACTION_STATUS_ENUM;
	
	@ManyToOne(()=>User)
	@Field(()=> User)
	user: User
	
	@CreateDateColumn()
	@Field(()=> Date)
	createdAt: Date
}
