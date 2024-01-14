import { Module } from "@nestjs/common";
import { AuthResolver } from "./auth.resolver";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { UsersModule } from "../users/users.module"
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtAccessStrategy } from "./strategies/jwt-access.strategy";	

@Module({
	imports: [
		UsersModule,		
		JwtModule.register({}),
	],
	providers: [
		JwtAccessStrategy,
		AuthService,
		AuthResolver,
	],
})
export class AuthModule{
	
}