import { PassportStrategy } from "@nestjs/passport";
// DI -> 원하는 인가 처리 방식을 생성자로 넣기
import { ExtractJwt, Strategy } from 'passport-jwt'


export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {		
	constructor(){
		super({
			jwtFromRequest: (req) => {
				const cookie = req.headers.cookie;
				const refreshToken = cookie.replace('refreshToken=', '');
				return refreshToken
			},
			secretOrKey: process.env.JWT_REFRESH_SECRET,
		});
	}	
	
	validate(payload){
		console.log(payload)
		
		return {
			id: payload.sub,
		};
	}
}