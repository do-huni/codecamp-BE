import { CreateUserInput} from "../dto/create-user.input";

export interface IUsersServiceCreate{
	// email: string;
	// name: string;
	// password: string;
	// age: number;
	createUserInput: CreateUserInput;
}

export interface IUsersServiceFindOneByEmail{
	email: string;
}

export interface IUsersServicefindOneById{
	id: string;
}