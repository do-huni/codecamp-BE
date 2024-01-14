import { ConflictException, UnprocessableEntityException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import { IAuthServiceRestoreRefreshToken, IAuthServiceGetAccessToken, IAuthServiceLogin, IAuthServiceSetRefreshToken } from "./interfaces/auth.service.interface";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService{
	constructor(
	private readonly usersService: UsersService,
	private readonly jwtService: JwtService,
	){}
	
	getAccessToken({user}: IAuthServiceGetAccessToken): string{
		return this.jwtService.sign(
			{sub: user.id},{secret: process.env.JWT_SECRET, expiresIn: "15s" }
			);		
	}
	
	setRefreshToken({user, context}: IAuthServiceSetRefreshToken): void{
		const refreshToken =  this.jwtService.sign(
			{sub: user.id},{secret: process.env.JWT_REFRESH_SECRET, expiresIn: '2w'},
		)
		
		//개발환경(http)
		context.res.setHeader("set-Cookie", 
							  `refreshToken=${refreshToken}; path:/;`,
							 );
		//배포환경(https)
		/*
		context.res.setHeader("set-Cookie", 
							  `refreshToken=${refreshToken}; path:/; domain=.myproject.com; SameSite=None; Secure; httpOnly;`,
							 );		
		res.setHeader("Access-Only-Allow-Origin", "https://myfrontsite.com");
		*/
		
	}
	
	restoreAccessToken({user}: IAuthServiceRestoreRefreshToken): string{
		return this.getAccessToken({user});
	}
	
	async login({email, password, context}: IAuthServiceLogin): Promise<string>{
		const user = await this.usersService.findOneByEmail({email});
		
		if(!user)
			throw new UnprocessableEntityException("이메일이 존재하지 않습니다.");
		
		const isAuthenticated = await bcrypt.compare(password, user.password);
		
		if(!isAuthenticated)
			throw new UnprocessableEntityException("암호가 틀렸습니다.");
		
		const accessToken =  this.getAccessToken({user});
		this.setRefreshToken({user, context});
		return accessToken;
	}
	
	
}
