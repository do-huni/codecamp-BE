import {AuthGuard} from "@nestjs/passport";
import {ExecutionContext} from "@nestjs/common";
import {GqlExecutionContext} from "@nestjs/graphql";

export const GqlAuthGuard = (name) => {
	return class GraphqlAuthGuard extends AuthGuard(name){
		getRequest(context: ExecutionContext){
		const gqlContext = GqlExecutionContext.create(context);
		return gqlContext.getContext().req;
		}
	}
}