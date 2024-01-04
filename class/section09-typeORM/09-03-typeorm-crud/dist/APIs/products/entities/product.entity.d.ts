import { ProductSalesLocation } from "../../productsSalesLocations/entities/productSalesLocation.entity";
import { ProductCategory } from "../../productsCategories/entities/productCategory.entity";
import { User } from "../../users/entities/user.entity";
import { ProductTag } from "../../productsTags/entities/productTag.entity";
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    isSoldout: boolean;
    productSalesLocation: ProductSalesLocation;
    productCategory: ProductCategory;
    user: User;
    productTags: ProductTag[];
}
