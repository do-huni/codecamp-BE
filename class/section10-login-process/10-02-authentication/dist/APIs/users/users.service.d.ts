import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { IUsersServiceCreate, IUsersServiceFindOneByEmail } from "./interfaces/users.service.interface";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findOneByEmail({ email }: IUsersServiceFindOneByEmail): Promise<User>;
    create({ createUserInput }: IUsersServiceCreate): Promise<User>;
}
