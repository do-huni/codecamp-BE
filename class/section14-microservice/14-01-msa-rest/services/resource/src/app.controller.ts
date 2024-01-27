//resource controller
import { MessagePattern } from '@nestjs/microservices';
import { Controller, Post} from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService) {}

	// @Post('/auth/login')
	@MessagePattern({qqq: '이름'})
	login2222(data){
		console.log(data);
		return "access token!"
	}
	
	logout(){
		//로그아웃!
	}
	
	restoreAccessToken(){
		
	}
}
