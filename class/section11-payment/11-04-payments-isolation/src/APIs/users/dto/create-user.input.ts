import { User } from "../entities/user.entity";
import { Int, InputType, Field } from "@nestjs/graphql";
import { Min } from "class-validator";

@InputType()
export class CreateUserInput{
	@Field(()=> String)
	name: string;
	
	@Field(()=>String)
	email: string;
	
	@Min(0)
	@Field(()=> Int)
	age: number;
	
	@Field(()=> String)
	password: string;
}