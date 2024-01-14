import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { IContext } from "../../commons/interfaces/context";
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    fetchUser(context: IContext): Promise<User>;
    createUser(createUserInput: CreateUserInput): Promise<User>;
}
