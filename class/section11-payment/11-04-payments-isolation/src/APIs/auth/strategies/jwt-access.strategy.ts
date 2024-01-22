import { PassportStrategy } from "@nestjs/passport";
// DI -> 원하는 인가 처리 방식을 생성자로 넣기
import { ExtractJwt, Strategy } from 'passport-jwt'


export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {		
	constructor(){
		super({
			// jwtFromRequest: (req) => {
			// 	const temp = req.header.Authorization;
			// 	const accessToken = temp.toLowerCase().replace('bearer', '');
			// 	return accessToken
			// },
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.JWT_SECRET,
		});
	}	
	
	validate(payload){
		console.log(payload)
		
		return {
			id: payload.sub,
		};
	}
}