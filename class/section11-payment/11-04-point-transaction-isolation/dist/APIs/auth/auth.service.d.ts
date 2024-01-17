import { IAuthServiceRestoreRefreshToken, IAuthServiceGetAccessToken, IAuthServiceLogin, IAuthServiceSetRefreshToken } from "./interfaces/auth.service.interface";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    getAccessToken({ user }: IAuthServiceGetAccessToken): string;
    setRefreshToken({ user, context }: IAuthServiceSetRefreshToken): void;
    restoreAccessToken({ user }: IAuthServiceRestoreRefreshToken): string;
    login({ email, password, context }: IAuthServiceLogin): Promise<string>;
}
