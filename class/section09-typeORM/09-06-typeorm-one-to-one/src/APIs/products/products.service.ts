import { Injectable, Scope, UnprocessableEntityException } from "@nestjs/common";
import { CreateProductInput } from "./dto/create-product.input";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IProductsServiceDelete, IProductsServiceCheckSoldout, IProductsServiceCreate, IProductsServiceFindOne, IProductsServiceUpdate } from "./interfaces/products.service.interface"
import {ProductsSalesLocationsService} from "../productsSalesLocations/productsSalesLocations.service";

@Injectable()
export class ProductsService{
	constructor(
	@InjectRepository(Product)
	private readonly productsRepository: Repository<Product>,
	private readonly productsSalesLocationsService: ProductsSalesLocationsService,	 
	){}
	
	async create({createProductInput}: IProductsServiceCreate): Promise<Product>{
		// 1. product만 등록하는 방법
		// const result = this.productsRepository.save({
		// 	...createProductInput
		// });
		// return result;
		
		// 2. 상품과 상품 거래 위치를 같이 등록하는 방법
		const { productSalesLocation, ...product } = createProductInput;
		const result = await this.productsSalesLocationsService.create({productSalesLocation});
		// 서비스를 타고 가야하는 이유는 검증로직 통일을 위해서.
		
		const result2 = await this.productsRepository.save({
			...createProductInput,
			productSalesLocation: result // result 통째로 넣기 vs id만 넣기
		});
		return result2;
	}
	
	findOne({productId}: IProductsServiceFindOne): Promise<Product>{
		return this.productsRepository.findOne({
			where: {id: productId},
			relations: ['productSalesLocation'],
		});
	}
	
	findAll(): Promise<Product[]>{
		return this.productsRepository.find({
			relations: ['productSalesLocation'],
		});
	}
	//	검증 로직 재사용을 위해 함수화
	checkSoldout({product}: IProductsServiceCheckSoldout): void{
		if(product.isSoldout){
			throw new UnprocessableEntityException("이미 판매 완료된 상품입니다.");
		}		
	}
	async update({productId, updateProductInput}: IProductsServiceUpdate): Promise<Product>{		
		// const product = await this.productsRepository.findOne({where: {id: productId}});
		// .update(), .insert() => 결과를 객체로 못 돌려받는 등록/수정 방법. 조회과정이 빠져서 더 효율적
		const product = await this.findOne({productId});
		this.checkSoldout({product});
		
		const result = this.productsRepository.save({
			...product, //수정 전 결과 값 
			...updateProductInput, // 수정 할 내용을 덮어씀
		}); // 수정하지 않을 내용도 객체에 담아야 리턴으로 받음.
		return result;
	}
	
	async delete({productId}: IProductsServiceDelete): Promise<boolean>{
		// 1. hard delete
		// const result = await this.productsRepository.delete({id: productId});
		// return result.affected ? true : false;
		
		// 2. soft delete - isDeleted
		// this.productsRepository.update({id: productId}, {isDeleted: true});
		
		// 3. soft delete - deletedAt
		// this.productsRepository.update({id: productId}, {deletedAt: new Date()});
		
		// 4. soft delete - softRemove(typeORM)
		// this.productsRepository.softRemove({id: productId});
		// 장점: 여러 ID 한번에 지우기 가능(.softRemove([{id:1},{id:2},{id:3}]))
		// 단점: id로만 삭제 가능
		
		// 5. soft delete - softDelete(typeORM)
		const result = await this.productsRepository.softDelete({id: productId});
// 		// 장점: id 말고 다른 컬럼으로도 삭제 가능
		// 단점: 한번에 지우기 불가능
		return result.affected ? true :false;
	}
}