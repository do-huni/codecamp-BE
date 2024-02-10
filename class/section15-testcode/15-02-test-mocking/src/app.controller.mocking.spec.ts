import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { Test, TestingModule } from '@nestjs/testing';	

class MockAppService {
	getHello(): string{
		return "나는 가짜다!";
	}
}

describe("컨트롤러 테스트하기", ()=>{
	
	let appController : AppController;
	
	beforeEach(async ()=>{		
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [
				{
					provide: AppService,
					useClass: MockAppService,
				},	
			],
		}).compile();
		
		appController = app.get(AppController);	
	})	
	
	describe("getHello 테스트하기", ()=>{		
		it('Hello World test', ()=>{
			expect(appController.getHello()).toBe("Hello World!");			
		})
	});
	
	describe("fetchBoard 테스트하기", ()=>{
		it('fetchBoard', ()=>{
			expect(appController.fetchBoard()).toEqual({title: "제목없음", author: "익명"});			
		})
	});
	
	describe("createBoard 테스트하기", ()=>{
		it('createBoard',()=>{
			const createObj = {
				title: "제목",
				author: "익명",
			}		
			expect(appController.createBoard(createObj)).toEqual(createObj);			
		})
	})
});