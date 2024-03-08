import path from "path";
import {checkPhone, getToken, sendTokenToSMS} from './phone.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import * as qqq from './phone.js'; //export 다가져오기. as 필수
import {options} from './swagger/config.js';
import cors from 'cors';
import * as EmailMiddleWare from "./email.controller.js";
import { mongoose } from "mongoose";
import express  from "express";
import { Board } from "./models/board.model.js";


//__dirname 선언
const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(express.static(__dirname+ "/frontend"));
app.get('/', (req, res) => {
	res.sendFile(__dirname+ '/frontend/signup.html');
});

app.get('/boards', async (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = await Board.find();

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post('/boards', async (req, res) => {
  // 1. 브라우저에서 보내준 데이터 확인하기
	console.log(req)
  console.log("=========================")
  console.log(req.body) // 추가
	
	// 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정
  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents
  });
  await board.save();
  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다!")
});

app.post('/tokens/email', (req, res)=>{
	EmailMiddleWare.createUser(req.body, res);	
})

mongoose.set("debug", true);


mongoose.connect("mongodb://my-database:27017/mydocker")
.then(()=>console.log("db 접속 성공"))
.catch(()=>console.log("db 접속 실패"));

app.listen(3000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!");
});