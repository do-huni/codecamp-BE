import { UseGuards } from "@nestjs/common";
import { Int, Args, Resolver, Mutation, Query, Context } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { GqlAuthGuard } from "../auth/guards/graphql-auth.guard";
import { IContext, IAuthUser } from "../../commons/interfaces/context";


@Resolver()
export class UsersResolver{
	
	constructor(private readonly usersService: UsersService){}
	
	@Query(()=> User)
	@UseGuards(GqlAuthGuard("access"))	
	fetchUser(
	@Context() context: IContext
	): Promise<User>{	
		// console.log(context.req.user.id);
		return this.usersService.findOneById({id: context.req.user.id});
	}
	
	@Mutation(()=> User)
	createUser(
	@Args("createUserInput") createUserInput: CreateUserInput
	// @Args("email") email: string,
	// @Args("password") password: string,
	// @Args('name') name: string,
	// @Args({name: 'age', type: ()=>Int}) age: number,
	): Promise<User>{
		return this.usersService.create({createUserInput});
	}	
}