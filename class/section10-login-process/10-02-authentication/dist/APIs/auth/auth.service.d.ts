import { IAuthServiceGetAccessToken, IAuthServiceLogin } from "./interfaces/auth.service.interface";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    getAccessToken({ user }: IAuthServiceGetAccessToken): Promise<string>;
    login({ email, password }: IAuthServiceLogin): Promise<string>;
}
