import { Injectable, Scope, UnprocessableEntityException } from "@nestjs/common";
import { ProductTag } from "./entities/productTag.entity";
import { In, InsertResult, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IProductsTagsServiceFindByNames, IProductsTagsServiceBulkInsert,IProductsTagsServiceDeduplication } from "./interfaces/productsTags.service.interface"
@Injectable()
export class ProductsTagsService{
	constructor(
		@InjectRepository(ProductTag)
		private readonly productsTagsRepository: Repository<ProductTag>,
	){}
	
	findByNames({tagNames}: IProductsTagsServiceFindByNames):Promise<ProductTag[]>{
		return this.productsTagsRepository.find({
			where: {name: In(tagNames)}
		});				
	}
	
	bulkInsert({names}: IProductsTagsServiceBulkInsert):Promise<InsertResult>{
		return this.productsTagsRepository.insert(names) //bulk-insert. save 명령어로는 불가능				

	}
	deduplication({tagNames, prevTags}: IProductsTagsServiceDeduplication){
		const temp = [];
		tagNames.forEach(el => {			
				const isExists = prevTags.find(prevEl => el === prevEl.name);
				if(!isExists) temp.push({name: el});
		})	
		return temp;
	}
}