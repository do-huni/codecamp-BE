import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardsModule } from './APIs/boards/boards.module';


@Module({
  imports: [
	  BoardsModule,
	  // ProductsModule,
	  // UsersModule,
	  GraphQLModule.forRoot<ApolloDriverConfig>({
		  driver: ApolloDriver,
		  autoSchemaFile: "src/commons/graphql/schema.gql",
	  }),
  ],
})
export class AppModule {}
