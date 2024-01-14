import { Int, Args, Resolver, Mutation, Context } from "@nestjs/graphql";
import { IContext } from "../../commons/interfaces/context";
import { AuthService } from "./auth.service";

@Resolver()
export class AuthResolver{
	constructor(
	private readonly authService: AuthService
	){}
	
	@Mutation(()=> String)
	login(
	@Args('email') email: string,
	@Args('password') password: string,
	@Context() context: IContext
	): Promise<string>{
		return this.authService.login({email, password, context });
	}
}