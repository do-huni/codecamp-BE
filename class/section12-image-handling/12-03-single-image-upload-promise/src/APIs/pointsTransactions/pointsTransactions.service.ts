import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource} from 'typeorm';
import { PointTransaction } from './entities/pointTransaction.entity';
import { IPointsTransactionsServiceCreate } from './interfaces/points-transactions-service.interface';
import { POINT_TRANSACTION_STATUS_ENUM } from "./entities/pointTransaction.entity";
import { User } from "../users/entities/user.entity";

@Injectable()
export class PointsTransactionsService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointsTransactionsRepository: Repository<PointTransaction>,
    @InjectRepository(User)	 
	private readonly usersRepository: Repository<User>,
	
	private	readonly dataSource: DataSource,
  ) {}

  async create({ impUid, amount, user: _user, }: IPointsTransactionsServiceCreate): Promise<PointTransaction> {
	  const queryRunner = this.dataSource.createQueryRunner();
	  await queryRunner.connect();
	  await queryRunner.startTransaction("SERIALIZABLE");
	  try{
		  // 1. 포인트 트렌젝션 테이블에 거래기록 생성
		  const pointTransaction = this.pointsTransactionsRepository.create({
			  impUid: impUid,
			  amount: amount,
			  user: _user,
			  status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
		  })
		  // await this.pointsTransactionsRepository.save(pointTransaction);
		  await queryRunner.manager.save(pointTransaction);

		  // 2. 유저의 돈 찾아오기
		  // const userData = await this.usersRepository.findOne({
		  // where: {id: user.id}
		  // });
		  const user = await queryRunner.manager.findOne(User, {
			  where: {id: _user.id}, //ROW-LOCK
			  lock: {mode: 'pessimistic_write'},
		  })
		  // 3. 유저의 돈 업데이트
		  const updatedUser = this.usersRepository.create({
			  ...user,
			  point: user.point + amount
		  });		  		  
		  await queryRunner.manager.save(updatedUser)		 		  
		  
		  /* 숫자인 경우 한번에 select + update 동시에 하기. 격리 단계 안올려도 됨.
		  await queryRunner.manager.increment(User, { id: _user.id }, 'point', amount);
		  */
		  
		  await queryRunner.commitTransaction();
		  // 4. 최종결과 브라우저에 돌려주기
		  return pointTransaction;		  
	  } catch (error){
		  await queryRunner.rollbackTransaction();
	  } finally {
		  queryRunner.release();
	  }

  }
}
