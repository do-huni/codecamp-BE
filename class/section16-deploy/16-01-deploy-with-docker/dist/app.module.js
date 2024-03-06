"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const auth_module_1 = require("./APIs/auth/auth.module");
const boards_module_1 = require("./APIs/boards/boards.module");
const files_module_1 = require("./APIs/files/files.module");
const users_module_1 = require("./APIs/users/users.module");
const payments_module_1 = require("./APIs/payments/payments.module");
const pointsTransactions_module_1 = require("./APIs/pointsTransactions/pointsTransactions.module");
const products_module_1 = require("./APIs/products/products.module");
const productsCategories_module_1 = require("./APIs/productsCategories/productsCategories.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            boards_module_1.BoardsModule,
            files_module_1.FilesModule,
            products_module_1.ProductsModule,
            productsCategories_module_1.ProductsCategoriesModule,
            pointsTransactions_module_1.PointsTransactionsModule,
            payments_module_1.PaymentsModule,
            users_module_1.UsersModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: "src/commons/graphql/schema.gql",
                context: ({ req, res }) => {
                    return {
                        req,
                        res,
                    };
                }
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.DATABASE_TYPE,
                host: process.env.DATABASE_HOST,
                port: Number(process.env.DATABASE_PORT),
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_DATABASE,
                entities: [__dirname + "/APIs/**/*.entity.*"],
                synchronize: true,
                logging: true,
            }),
        ],
        controllers: [
            app_controller_1.AppController
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map