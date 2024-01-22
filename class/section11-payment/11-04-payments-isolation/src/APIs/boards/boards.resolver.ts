import { Controller, Get  } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
@Resolver()
export class BoardsResolver {
	
	constructor(
	private readonly boardsService: BoardsService, //	 
	) {}

	@Query(()=> [Board], {nullable: true}) //graphql과 ts에서 타입 표기 syntax 다름 주의!
	fetchBoards(): Board[] {
		return this.boardsService.findAll();
	}
	@Mutation(()=> String)
	createBoard(
		// @Args("writer") writer: string,
		// @Args("title") title: string,
		// @Args({name: "contents", nullable: true }) contents: string,	
		@Args("createBoardInput") createBoardInput: CreateBoardInput,
	): string{
		return this.boardsService.create({createBoardInput});
	}
	
}
