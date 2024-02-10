import { CreateProductInput } from "./create-product.input";
declare const UpdateProductInput_base: import("@nestjs/common").Type<Partial<Omit<CreateProductInput, "productTags">>>;
export declare class UpdateProductInput extends UpdateProductInput_base {
}
export {};
