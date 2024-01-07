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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("./entities/product.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const productsSalesLocations_service_1 = require("../productsSalesLocations/productsSalesLocations.service");
let ProductsService = class ProductsService {
    constructor(productsRepository, productsSalesLocationsService) {
        this.productsRepository = productsRepository;
        this.productsSalesLocationsService = productsSalesLocationsService;
    }
    async create({ createProductInput }) {
        const { productSalesLocation, ...product } = createProductInput;
        const result = await this.productsSalesLocationsService.create({ productSalesLocation });
        const result2 = await this.productsRepository.save({
            ...createProductInput,
            productSalesLocation: result
        });
        return result2;
    }
    findOne({ productId }) {
        return this.productsRepository.findOne({
            where: { id: productId },
            relations: ['productSalesLocation'],
        });
    }
    findAll() {
        return this.productsRepository.find({
            relations: ['productSalesLocation'],
        });
    }
    checkSoldout({ product }) {
        if (product.isSoldout) {
            throw new common_1.UnprocessableEntityException("이미 판매 완료된 상품입니다.");
        }
    }
    async update({ productId, updateProductInput }) {
        const product = await this.findOne({ productId });
        this.checkSoldout({ product });
        const result = this.productsRepository.save({
            ...product,
            ...updateProductInput,
        });
        return result;
    }
    async delete({ productId }) {
        const result = await this.productsRepository.softDelete({ id: productId });
        return result.affected ? true : false;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        productsSalesLocations_service_1.ProductsSalesLocationsService])
], ProductsService);
//# sourceMappingURL=products.service.js.map