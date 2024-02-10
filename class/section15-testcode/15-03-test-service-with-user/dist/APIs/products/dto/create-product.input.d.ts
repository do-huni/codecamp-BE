import { ProductSalesLocationInput } from "../../productsSalesLocations/dto/product-sales-location.input";
export declare class CreateProductInput {
    name: string;
    description: string;
    price: number;
    productSalesLocation: ProductSalesLocationInput;
    productCategoryId: string;
    productTags: string[];
}
