import { ConflictException,  Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { IUsersServiceCreate, IUsersServiceFindOneByEmail, IUsersServicefindOneById } from "./interfaces/users.service.interface";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService{
	constructor(
	@InjectRepository(User)		
	 private readonly usersRepository: Repository<User>
	){}
	
	findOneById({id}: IUsersServicefindOneById): Promise<User>{
		return this.usersRepository.findOne({where: {id}});
	}
	
	findOneByEmail({email}: IUsersServiceFindOneByEmail): Promise<User>{
		return this.usersRepository.findOne({where: {email}});
	}
	
	// checkEmailDuplicate({email}: IUsersServicecheckEmailDuplicate): Promise<Boolean>{
	// 	this.usersRepository.findOne({where: {email}});
	// }
	
	async create({createUserInput}: IUsersServiceCreate): Promise<User>{
		const {email, password, ...user } = createUserInput;
		//repo에서 findone해서 이메일 중복체크 하고 HTTPEXCEPTION 던지기
		const doesExist = await this.findOneByEmail({email});
		if(doesExist)
			throw new ConflictException("이미 존재하는 이메일입니다!");
		const hashedPassword =  await bcrypt.hash(password, 10);
		return this.usersRepository.save({
			...createUserInput,
			password: hashedPassword,
		});
	}
}