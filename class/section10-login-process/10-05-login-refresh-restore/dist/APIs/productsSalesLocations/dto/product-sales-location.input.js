"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSalesLocationInput = void 0;
const productSalesLocation_entity_1 = require("../entities/productSalesLocation.entity");
const graphql_1 = require("@nestjs/graphql");
let ProductSalesLocationInput = class ProductSalesLocationInput extends (0, graphql_1.OmitType)(productSalesLocation_entity_1.ProductSalesLocation, ['id'], graphql_1.InputType) {
};
exports.ProductSalesLocationInput = ProductSalesLocationInput;
exports.ProductSalesLocationInput = ProductSalesLocationInput = __decorate([
    (0, graphql_1.InputType)()
], ProductSalesLocationInput);
//# sourceMappingURL=product-sales-location.input.js.map