import { BoardsService } from './boards.service';
import { Cache } from 'cache-manager';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
export declare class BoardsResolver {
    private readonly boardsService;
    private readonly cacheManager;
    constructor(boardsService: BoardsService, cacheManager: Cache);
    fetchBoards(): Promise<Board[]>;
    createBoard(createBoardInput: CreateBoardInput): Promise<string>;
}
