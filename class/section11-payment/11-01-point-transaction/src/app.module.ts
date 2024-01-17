import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from "./app.controller";
import { AuthModule } from './APIs/auth/auth.module';
import { BoardsModule } from './APIs/boards/boards.module';
import { PointsTransactionsModule } from './APIs/pointsTransactions/pointsTransactions.module';
import { UsersModule } from './APIs/users/users.module';
import { ProductsModule } from './APIs/products/products.module';
import { ProductsCategoriesModule } from './APIs/productsCategories/productsCategories.module';
import { Board } from './APIs/boards/entities/board.entity';
import { ConfigModule } from "@nestjs/config"


@Module({
  imports: [
	  AuthModule,
	  BoardsModule,
	  ProductsModule,
	  ProductsCategoriesModule,
	  PointsTransactionsModule,
	  UsersModule,
	  ConfigModule.forRoot(),
	  GraphQLModule.forRoot<ApolloDriverConfig>({
		  driver: ApolloDriver,
		  autoSchemaFile: "src/commons/graphql/schema.gql",
		  context: ({req, res})=>{		  			  
			  return {
				  req,
				  res, // response는 디폴트로 리턴을 안해줘서 context에 안담겨있음. 여기에 써줘야 접근가능
			  };
		  }
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
  controllers: [
	  AppController
  ]
})
export class AppModule {}
