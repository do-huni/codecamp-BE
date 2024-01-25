import { Inject, Controller, Get  } from '@nestjs/common';
import { CacheModule, CACHE_MANAGER } from '@nestjs/cache-manager';
import { BoardsService } from './boards.service';
import { Cache } from 'cache-manager';
import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
@Resolver()
export class BoardsResolver {
	
	constructor(
	private readonly boardsService: BoardsService, //
	@Inject(CACHE_MANAGER)
	private readonly cacheManager: Cache, //
	) {}

	@Query(()=> [Board], {nullable: true}) //graphql과 ts에서 타입 표기 syntax 다름 주의!
	async fetchBoards(): Promise<Board[]> {
		const mycache = await this.cacheManager.get('aaa');
		console.log(mycache);
		return this.boardsService.findAll();
	}
	@Mutation(()=> String)
	async createBoard(
		// @Args("writer") writer: string,
		// @Args("title") title: string,
		// @Args({name: "contents", nullable: true }) contents: string,	
		@Args("createBoardInput") createBoardInput: CreateBoardInput,
	): Promise<string>{
		await this.cacheManager.set('aaa', createBoardInput, 0);
		return this.boardsService.create({createBoardInput});
	}
	
}
