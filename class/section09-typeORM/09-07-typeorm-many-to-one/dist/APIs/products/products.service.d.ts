import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { IProductsServiceDelete, IProductsServiceCheckSoldout, IProductsServiceCreate, IProductsServiceFindOne, IProductsServiceUpdate } from "./interfaces/products.service.interface";
import { ProductsSalesLocationsService } from "../productsSalesLocations/productsSalesLocations.service";
export declare class ProductsService {
    private readonly productsRepository;
    private readonly productsSalesLocationsService;
    constructor(productsRepository: Repository<Product>, productsSalesLocationsService: ProductsSalesLocationsService);
    create({ createProductInput }: IProductsServiceCreate): Promise<Product>;
    findOne({ productId }: IProductsServiceFindOne): Promise<Product>;
    findAll(): Promise<Product[]>;
    checkSoldout({ product }: IProductsServiceCheckSoldout): void;
    update({ productId, updateProductInput }: IProductsServiceUpdate): Promise<Product>;
    delete({ productId }: IProductsServiceDelete): Promise<boolean>;
}
