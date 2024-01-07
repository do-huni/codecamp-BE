import { Int, InputType, Field } from "@nestjs/graphql";
import { Min } from "class-validator";
import { ProductSalesLocationInput } from "../../productsSalesLocations/dto/product-sales-location.input";

@InputType()
export class CreateProductInput {
	@Field(()=> String)
	name: string;
	
	@Field(()=> String)
	description: string;
	
	@Min(0)
	@Field(()=> Int)
	price: number;
	
	@Field(()=> ProductSalesLocationInput)
	productSalesLocation: ProductSalesLocationInput;
}