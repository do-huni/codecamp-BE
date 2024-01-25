import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
	private readonly usersRepository: Repository<User>
  ) {}

  async create({ impUid, amount, user }: IPointsTransactionsServiceCreate): Promise<PointTransaction> {
      // 1. 포인트 트렌젝션 테이블에 거래기록 생성
	  const pointTransaction = this.pointsTransactionsRepository.create({
		  impUid: impUid,
		  amount: amount,
		  user: user,
		  status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
	  })
	  await this.pointsTransactionsRepository.save(pointTransaction);
	  
	  // 2. 유저의 돈 찾아오기
	  const userData = await this.usersRepository.findOne({
		  where: {id: user.id}
	  });
	  // 3. 유저의 돈 업데이트
	  await this.usersRepository.update({id: user.id,}, {point: userData.point + amount});
	  // 4. 최종결과 브라우저에 돌려주기
	  return pointTransaction;
  }
}