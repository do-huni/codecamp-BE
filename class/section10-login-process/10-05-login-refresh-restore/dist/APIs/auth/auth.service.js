"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    getAccessToken({ user }) {
        return this.jwtService.sign({ sub: user.id }, { secret: process.env.JWT_SECRET, expiresIn: "15s" });
    }
    setRefreshToken({ user, context }) {
        const refreshToken = this.jwtService.sign({ sub: user.id }, { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '2w' });
        context.res.setHeader("set-Cookie", `refreshToken=${refreshToken}; path:/;`);
    }
    restoreAccessToken({ user }) {
        return this.getAccessToken({ user });
    }
    async login({ email, password, context }) {
        const user = await this.usersService.findOneByEmail({ email });
        if (!user)
            throw new common_1.UnprocessableEntityException("이메일이 존재하지 않습니다.");
        const isAuthenticated = await bcrypt.compare(password, user.password);
        if (!isAuthenticated)
            throw new common_1.UnprocessableEntityException("암호가 틀렸습니다.");
        const accessToken = this.getAccessToken({ user });
        this.setRefreshToken({ user, context });
        return accessToken;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map