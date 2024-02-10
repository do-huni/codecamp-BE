import { AppService } from "./app.service";
import { AppController } from "./app.controller";

describe("컨트롤러 테스트하기", ()=>{
	
	let appService : AppService;
	let appController : AppController;
	
	beforeEach(()=>{		
		appService = new AppService();
		appController = new AppController(appService);		
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