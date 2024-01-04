import { Int, InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateProductInput {
	@Field(()=> String)
	name: string;
	
	@Field(()=> String)
	description: string;
	
	@Field(()=> Int)
	price: number;
	
	
}