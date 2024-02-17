import { UsersService } from "../users.service";
import { TypeOrmModule, getRepositoryToken } from "@nestjs/typeorm";
import { Test } from "@nestjs/testing";
import { ConflictException } from "@nestjs/common";
import { User } from "../entities/user.entity";
// db repo mocking하기
class MockUsersRepository{
	mydb = [
		{email: "a@a.com", password: "0128", name: "짱구", age: 8},
		{email: "b@b.com", password: "1123", name: "철수", age: 12},
	];
	
	findOne({where}){
		//email로만 찾는 문제가 있음. id로 서치 안됨!!
		const users = this.mydb.filter((el)=> el.email === where.email);;
		if(users.length) return users[0];
		return null;
	}
	save({email, password, name, age}){
		this.mydb.push({email, password, name, age});
		return ({email, password, name, age});
	}
}

describe("UsersService",()=>{
	let usersService: UsersService;
	
	beforeEach(async ()=>{
		const usersModule = await Test.createTestingModule({
			// imports: [TypeOrmModule...],
			controllers: [],
			providers: [UsersService,
						{
							provide: getRepositoryToken(User),
							useClass: MockUsersRepository,
						},
					   ],
		}).compile();
		
		usersService = usersModule.get<UsersService>(UsersService);
	})
	
	
	// describe("findeOneByEmail", ()=>{
	// 	const result = usersService.findeOneByEmail({ email: "a@a.com"});
	// 	expect(result).toStrictEqual({
	// 		email: "a@a.com",
	// 		name: "짱구",
	// 		...
	// 	})
	// })
	
	describe("create", ()=>{
		it("이미 존재하는 이메일인지 검증", async ()=>{
			const myData = {
				email: "a@a.com",
				password: '1234',
				name: '철수',
				age: 13
			};
			try{
				await usersService.create({createUserInput: {...myData}});
			} catch(error){
				expect(error).toBeInstanceOf(ConflictException);
			}
		});		
		it("회원 등록 잘 됐는지 검증", async ()=>{
			const myData = {
				email: "ab@ab.com",
				password: '1234',
				name: '철수',
				age: 13
			};			
			const result = await usersService.create({createUserInput: {...myData}});
			const { password, ...rest } = result;
			expect(rest).toStrictEqual({
				email: "ab@ab.com",
				name: '철수',
				age: 13
			});
		})		
	})
})