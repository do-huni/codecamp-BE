import { Repository } from "typeorm";
import { ProductSalesLocation } from "./entities/productSalesLocation.entity";
export declare class ProductsSalesLocationsService {
    private readonly productsSalesLocationsRepository;
    constructor(productsSalesLocationsRepository: Repository<ProductSalesLocation>);
    create({ productSalesLocation }: {
        productSalesLocation: any;
    }): Promise<any>;
}
