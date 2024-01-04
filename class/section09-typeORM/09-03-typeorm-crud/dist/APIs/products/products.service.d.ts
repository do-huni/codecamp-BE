import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { IProductsServiceCreate, IProductsServiceFindOne } from "./interfaces/products.service.interface";
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Product>);
    create({ createProductInput }: IProductsServiceCreate): Promise<Product>;
    findOne({ productId }: IProductsServiceFindOne): Promise<Product>;
    findAll(): Promise<Product[]>;
}
