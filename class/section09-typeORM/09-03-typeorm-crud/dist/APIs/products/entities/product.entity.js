"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const productSalesLocation_entity_1 = require("../../productsSalesLocations/entities/productSalesLocation.entity");
const productCategory_entity_1 = require("../../productsCategories/entities/productCategory.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const productTag_entity_1 = require("../../productsTags/entities/productTag.entity");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Product.prototype, "isSoldout", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(() => productSalesLocation_entity_1.ProductSalesLocation),
    (0, graphql_1.Field)(() => productSalesLocation_entity_1.ProductSalesLocation),
    __metadata("design:type", productSalesLocation_entity_1.ProductSalesLocation)
], Product.prototype, "productSalesLocation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => productCategory_entity_1.ProductCategory),
    (0, graphql_1.Field)(() => productCategory_entity_1.ProductCategory),
    __metadata("design:type", productCategory_entity_1.ProductCategory)
], Product.prototype, "productCategory", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Product.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.JoinTable)(),
    (0, typeorm_1.ManyToMany)(() => productTag_entity_1.ProductTag, (productTags) => productTags.products),
    (0, graphql_1.Field)(() => [productTag_entity_1.ProductTag]),
    __metadata("design:type", Array)
], Product.prototype, "productTags", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Product);
//# sourceMappingURL=product.entity.js.map