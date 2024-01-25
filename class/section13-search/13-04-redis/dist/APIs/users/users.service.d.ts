import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { IUsersServiceCreate, IUsersServiceFindOneByEmail, IUsersServicefindOneById } from "./interfaces/users.service.interface";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findOneById({ id }: IUsersServicefindOneById): Promise<User>;
    findOneByEmail({ email }: IUsersServiceFindOneByEmail): Promise<User>;
    create({ createUserInput }: IUsersServiceCreate): Promise<User>;
}
