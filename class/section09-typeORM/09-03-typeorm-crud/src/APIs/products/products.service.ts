import { Injectable, Scope } from "@nestjs/common";
import { CreateProductInput } from "./dto/create-product.input";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IProductsServiceCreate, IProductsServiceFindOne } from "./interfaces/products.service.interface"

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
}