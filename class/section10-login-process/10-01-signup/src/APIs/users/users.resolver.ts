import { Int, Args, Resolver, Mutation } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";

@Resolver()
export class UsersResolver{
	
	constructor(private readonly usersService: UsersService){}
	
	
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