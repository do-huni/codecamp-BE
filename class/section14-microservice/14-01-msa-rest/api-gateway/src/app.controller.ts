//gateway controller
import { Inject, Controller, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices'
// import { AppService } from './app.service';

@Controller()
export class AppController {
	
  constructor(
	@Inject('AUTH_SERVICE')
	private readonly clientAuthService: ClientProxy,
	@Inject("RESOURCE_SERVICE")
	private readonly clientResourceService: ClientProxy,
			  ) {}
	
	login(){
		return this.clientAuthService.send(
			{qqq: '이름'},
			{email: "a@a.com", password: '1234'},
		);
	}
	
	fetchBoards(){
		return this.clientResourceService.send(
			{cmd: 'fetchBoards'},
			{}
		)
	}
}
