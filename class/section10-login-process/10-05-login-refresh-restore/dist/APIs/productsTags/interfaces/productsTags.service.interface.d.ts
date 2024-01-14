import { ProductTag } from "../entities/productTag.entity";
export interface IProductsTagsServiceFindByNames {
    tagNames: string[];
}
export interface IProductsTagsServiceBulkInsert {
    names: {
        name: string;
    }[];
}
export interface IProductsTagsServiceDeduplication {
    tagNames: string[];
    prevTags: ProductTag[];
}
