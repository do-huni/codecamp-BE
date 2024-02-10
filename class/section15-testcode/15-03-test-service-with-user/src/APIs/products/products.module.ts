import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { Product } from "./entities/product.entity";
import { ProductSubscriber } from "./entities/product.subscriber"
import { ProductSalesLocation } from "../productsSalesLocations/entities/productSalesLocation.entity";
import { ProductsSalesLocationsService } from "../productsSalesLocations/productsSalesLocations.service";
import { ProductTag } from "../productsTags/entities/productTag.entity";
import { ProductsTagsService } from "../productsTags/productsTags.service";
import { TypeOrmModule } from "@nestjs/typeorm";
@Module({	
	imports: [
		TypeOrmModule.forFeature([
			Product, //
			ProductSalesLocation, //
			ProductTag, //
		])
	],
	providers: [
		ProductSubscriber,
		ProductsResolver,
		ProductsService,
		ProductsSalesLocationsService,
		ProductsTagsService
	],
})
export class ProductsModule{
	
}