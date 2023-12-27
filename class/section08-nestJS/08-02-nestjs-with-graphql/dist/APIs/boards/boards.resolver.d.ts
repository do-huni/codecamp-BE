import { BoardsService } from './boards.service';
export declare class BoardsResolver {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    fetchBoards(): string;
}
