import { Args, Mutation, Resolver, Query } from "@nestjs/graphql"
import { ProductsService } from "./products.service";
import { CreateProductInput } from "./dto/create-product.input";
import { Product } from "./entities/product.entity";

@Resolver()
export class ProductsResolver{
	constructor(
	private readonly productsService: ProductsService //
	 
	){}	
	
	@Mutation(()=> Product)
	createProduct(
	@Args("createProductInput")
	 createProductInput: CreateProductInput	
	): Promise<Product>{
		// << 브라우저에 결과 보내주는 2가지 방법 >>
		
		// 1. 등록된 객체 그대로 브라우저에 주기
		return this.productsService.create({ createProductInput });
		
		// 2. 결과 메시지만 보내주기
		// return "등록에 성공했습니다.";
	}
	
	@Query(()=> Product)
	fetchProduct(
	@Args("productId")
	 productId: string,
	): Promise<Product>{
		return this.productsService.findOne({productId});	
	}
	
	@Query(()=> [Product])
	fetchProducts(): Promise<Product[]>{
		return this.productsService.findAll();
	}
}