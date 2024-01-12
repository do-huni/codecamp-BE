import { CreateUserInput } from "../dto/create-user.input";
export interface IUsersServiceCreate {
    createUserInput: CreateUserInput;
}
export interface IUsersServiceFindOneByEmail {
    email: string;
}
