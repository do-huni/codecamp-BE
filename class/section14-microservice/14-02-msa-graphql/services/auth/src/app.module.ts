//auth
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { AppResolver } from './app.resolver';


@Module({
  imports: [
	  GraphQLModule.forRoot<ApolloFederationDriverConfig>({
		  driver: ApolloFederationDriver,
		  autoSchemaFile: "src/commons/graphql/schema.gql"
	  }),
  ],
  providers: [
	  AppResolver,	  
	  AppService,
  ],
})
export class AppModule {}
