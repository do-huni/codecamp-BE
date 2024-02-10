import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  	@Get()
  	getHello(): string {
		return this.appService.getHello();
  	}
	
  	@Get()
	fetchBoard(){
		return {
			title: "제목없음",
			author: "익명"
		}
	}
	
	@Post()
	createBoard({title, author}){
		console.log(title, author);
		return {
			title, author
		};
	}
	
}
