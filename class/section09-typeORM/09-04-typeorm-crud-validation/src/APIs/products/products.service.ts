import { Injectable, Scope } from "@nestjs/common";
import { CreateProductInput } from "./dto/create-product.input";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IProductsServiceCreate, IProductsServiceFindOne, IProductsServiceUpdate } from "./interfaces/products.service.interface"

@Injectable()
export class ProductsService{
	constructor(
	@InjectRepository(Product)
	private readonly productsRepository: Repository<Product>,
	){}
	
	create({createProductInput}: IProductsServiceCreate): Promise<Product>{
		const result = this.productsRepository.save({
			...createProductInput
		});
		return result;
	}
	
	findOne({productId}: IProductsServiceFindOne): Promise<Product>{
		return this.productsRepository.findOne({where: {id: productId}});
	}
	
	findAll(): Promise<Product[]>{
		return this.productsRepository.find();
	}
	
	async update({productId, updateProductInput}: IProductsServiceUpdate): Promise<Product>{		
		const product = await this.productsRepository.findOne({where: {id: productId}});
		// .update(), .insert() => 결과를 객체로 못 돌려받는 등록/수정 방법. 조회과정이 빠져서 더 효율적
		const result = this.productsRepository.save({
			...product, //수정 전 결과 값 
			...updateProductInput, // 수정 할 내용을 덮어씀
		}); // 수정하지 않을 내용도 객체에 담아야 리턴으로 받음.
		return result;
	}
}