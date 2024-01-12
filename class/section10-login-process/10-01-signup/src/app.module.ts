import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { BoardsModule } from './APIs/boards/boards.module';
import { UsersModule } from './APIs/users/users.module';
import { ProductsModule } from './APIs/products/products.module';
import { ProductsCategoriesModule } from './APIs/productsCategories/productsCategories.module';
import { Board } from './APIs/boards/entities/board.entity';
import { ConfigModule } from "@nestjs/config"


@Module({
  imports: [
	  BoardsModule,
	  ProductsModule,
	  ProductsCategoriesModule,
	  UsersModule,
	  ConfigModule.forRoot(),
	  GraphQLModule.forRoot<ApolloDriverConfig>({
		  driver: ApolloDriver,
		  autoSchemaFile: "src/commons/graphql/schema.gql",
	  }),
	  TypeOrmModule.forRoot({
		  type: process.env.DATABASE_TYPE as 'mysql',
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
})
export class AppModule {}
