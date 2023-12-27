import { Injectable, Scope} from '@nestjs/common';

// 인젝션-스코프: 싱클톤(new 한 번)으로 할래 말래?
// request Scope => 매 요청마다 new
// transient Scope => 매 주입마다 new
@Injectable({ scope: Scope.DEFAULT }) 
export class BoardsService {
  getHello(): string {
    return 'Hello World!';
  }
}
