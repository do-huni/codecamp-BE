import {User} from "../../users/entities/user.entity";
import {IContext} from "../../../commons/interfaces/context"
export interface IAuthServiceLogin{
	email: string;
	password: string;
	context: IContext;
}

export interface IAuthServiceGetAccessToken{
	user: User | {
		id: string
	};
}

export interface IAuthServiceRestoreRefreshToken{
	user: {
		id: string
	};
}


export interface IAuthServiceSetRefreshToken{
	user: User;
	context: IContext;
}