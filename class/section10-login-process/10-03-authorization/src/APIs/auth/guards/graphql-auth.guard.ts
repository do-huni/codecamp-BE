import {AuthGuard} from "@nestjs/passport";
import {ExecutionContext} from "@nestjs/common";
import {GqlExecutionContext} from "@nestjs/graphql";

export class GraphqlAuthAccessGuard extends AuthGuard("access"){
	getRequest(context: ExecutionContext){
		const gqlContext = GqlExecutionContext.create(context);
		return gqlContext.getContext().req;
	}
}