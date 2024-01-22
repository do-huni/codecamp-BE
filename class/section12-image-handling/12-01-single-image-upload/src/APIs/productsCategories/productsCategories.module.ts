import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsCategoriesService } from "./productsCategories.service";
import { ProductsCategoriesResolver } from "./productsCategories.resolver";
import { ProductCategory } from "./entities/productCategory.entity";


@Module({
	imports: [
		TypeOrmModule.forFeature([
			ProductCategory,
			
		])
	],
	providers: [
		ProductsCategoriesResolver,
		ProductsCategoriesService,
		
	],
})
export class ProductsCategoriesModule{
	
}