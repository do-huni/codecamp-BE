import { ProductsService } from "./products.service";
import { CreateProductInput } from "./dto/create-product.input";
import { UpdateProductInput } from "./dto/update-product.input";
import { Product } from "./entities/product.entity";
export declare class ProductsResolver {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(createProductInput: CreateProductInput): Promise<Product>;
    fetchProduct(productId: string): Promise<Product>;
    fetchProducts(): Promise<Product[]>;
    updateProduct(productId: string, updateProductInput: UpdateProductInput): Promise<Product>;
    deleteProduct(productId: string): Promise<boolean>;
}
