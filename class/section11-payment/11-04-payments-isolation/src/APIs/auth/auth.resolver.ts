import { Int, Args, Resolver, Mutation, Context } from "@nestjs/graphql";
import { IContext } from "../../commons/interfaces/context";
import { AuthService } from "./auth.service";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "../auth/guards/graphql-auth.guard";

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
	
	@Mutation(()=> String)
	@UseGuards(GqlAuthGuard("refresh"))	
	restoreAccessToken(
	@Context() context: IContext
	): string{
		return this.authService.restoreAccessToken({user: context.req.user});
	}	
}