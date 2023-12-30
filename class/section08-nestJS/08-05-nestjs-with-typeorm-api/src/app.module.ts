import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { BoardsModule } from './APIs/boards/boards.module';
import { Board } from './APIs/boards/entities/board.entity';

@Module({
  imports: [
	  BoardsModule,
	  // ProductsModule,
	  // UsersModule,
	  GraphQLModule.forRoot<ApolloDriverConfig>({
		  driver: ApolloDriver,
		  autoSchemaFile: "src/commons/graphql/schema.gql",
	  }),
	  TypeOrmModule.forRoot({
		  type: "mysql",
		  host: "localhost",
		  port: 3306,
		  username: "root",
		  password: "12345678",
		  database: "myproject",
		  entities: [Board],
		  synchronize: true,
		  logging: true,	
	  }),
  ],
})
export class AppModule {}
