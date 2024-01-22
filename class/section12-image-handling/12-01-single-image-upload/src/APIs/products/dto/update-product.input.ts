import { Field, InputType, Int, PartialType, OmitType } from "@nestjs/graphql";
import { CreateProductInput } from "./create-product.input";
// import { Min } from "class-validator";

// @InputType()
// export class UpdateProductInput{
// 	@Field(()=> String, {nullable: true})
// 	name: string;
	
// 	@Field(()=> String, {nullable: true})
// 	description: string;
	
// 	@Min(0)
// 	@Field(()=> Int, {nullable: true})
// 	price: number;
// }
@InputType()
export class UpdateProductInput extends PartialType(OmitType(CreateProductInput,['productTags'])){
	//아래 내용들을 상속 받음
	//name?: string
	//description?: string
	//price?: number
}

// PickType(CreateProductInput, ['name', 'price']);
// OmitType(CreateProductInput, ['name']);