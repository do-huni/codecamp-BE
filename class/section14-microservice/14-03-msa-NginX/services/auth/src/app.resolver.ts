// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import { Query, Mutation, Resolver} from '@nestjs/graphql';


@Resolver()
export class AppResolver {
  // constructor(private readonly appService) {}
	
	@Query(()=>String)
	aaa(){
		return aaa;
	}
	
	@Mutataion(()=> String)
	login(){
		return "access token";
	}
}
