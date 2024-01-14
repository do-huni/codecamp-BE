import {User} from "../../users/entities/user.entity";
import {IContext} from "../../../commons/interfaces/context"
export interface IAuthServiceLogin{
	email: string;
	password: string;
	context: IContext;
}

export interface IAuthServiceGetAccessToken{
	user: User;
}

export interface IAuthServiceSetRefreshToken{
	user: User;
	context: IContext;
}