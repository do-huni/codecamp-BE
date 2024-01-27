//auth controller
import { MessagePattern } from '@nestjs/microservices';
import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService) {}
	
	// @Get("/boards")
	@MessagePattern({cmd: "fetchBoards"})
	fetchBoards(){
		/// 데이터 조회하기
		return "게시글 데이터";
	}
}
