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
exports.ProductSalesLocation = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
let ProductSalesLocation = class ProductSalesLocation {
};
exports.ProductSalesLocation = ProductSalesLocation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProductSalesLocation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProductSalesLocation.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProductSalesLocation.prototype, "addressDetail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 9, scale: 6 }),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], ProductSalesLocation.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 9, scale: 6 }),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], ProductSalesLocation.prototype, "lng", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], ProductSalesLocation.prototype, "meetingTime", void 0);
exports.ProductSalesLocation = ProductSalesLocation = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], ProductSalesLocation);
//# sourceMappingURL=productSalesLocation.entity.js.map