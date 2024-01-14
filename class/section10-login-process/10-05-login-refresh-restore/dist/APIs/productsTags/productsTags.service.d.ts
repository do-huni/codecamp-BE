import { ProductTag } from "./entities/productTag.entity";
import { InsertResult, Repository } from "typeorm";
import { IProductsTagsServiceFindByNames, IProductsTagsServiceBulkInsert, IProductsTagsServiceDeduplication } from "./interfaces/productsTags.service.interface";
export declare class ProductsTagsService {
    private readonly productsTagsRepository;
    constructor(productsTagsRepository: Repository<ProductTag>);
    findByNames({ tagNames }: IProductsTagsServiceFindByNames): Promise<ProductTag[]>;
    bulkInsert({ names }: IProductsTagsServiceBulkInsert): Promise<InsertResult>;
    deduplication({ tagNames, prevTags }: IProductsTagsServiceDeduplication): any[];
}
