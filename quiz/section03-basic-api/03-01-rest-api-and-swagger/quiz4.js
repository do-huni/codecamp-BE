import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from 'swagger-jsdoc';
import {options} from './swagger/config.js';



const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

/*
# 1. 회원 목록 조회 API 만들기

1. `Quiz04` 폴더 안에, 명령어를 통해 `package.json` 파일을 자동으로 만들어주세요. 
2. `package.json` 파일에 **"type": "module”** 을 추가해 주세요.
3. `Quiz04` 폴더 안에 `express`, `swagger-jsdoc`, `swagger-ui-express`를 설치해 주세요. 
4. index.js 파일을 만들어 회원 목록을 조회하는 API를 만들어 주세요.
    1. API Method는 `GET` 방식으로 조회합니다.
    2. API Endpoint는 **`/users`** 입니다.
    3. Postman에서 해당 API를 요청했을 때, 하드코딩된 회원 5명의 데이터를 받아와야 합니다.
        
        ⇒ 회원 1명의 데이터는 `객체` 1개이며, 총 5개의 객체를 `하나의 배열`로 담아서 받습니다.
        
    4. 각각의 회원 데이터는 `email, name, phone, personal(주민등록번호 앞자리), prefer(내가 좋아하는 사이트)`가 반드시 포함되어야 합니다. `key` 값을 반드시 동일하게 작성해 주세요!
        
        ```jsx
        // 회원 1명 데이터 객체 예시
        { 
        	email : "aaa@gmail.com", 
        	name : "철수",
        	phone : "010-1234-5678",
        	personal : "220110-2222222",
        	prefer : "https://naver.com"
        }
        ```
        
5. 만든 API를 Postman으로 요청해 보고, **요청과 응답이 모두 보이게** 캡쳐해 주세요
*/

app.get("/users",(req,res)=>{
	const data = [
        { 
        	email : "aaa@gmail.com", 
        	name : "철수",
        	phone : "010-1234-5678",
        	personal : "220110-2222222",
        	prefer : "https://naver.com"
        },
        { 
        	email : "aaa@gmail.com", 
        	name : "민수",
        	phone : "010-1234-5678",
        	personal : "220110-2222222",
        	prefer : "https://naver.com"
        },
        { 
        	email : "aaa@gmail.com", 
        	name : "길수",
        	phone : "010-1234-5678",
        	personal : "220110-2222222",
        	prefer : "https://naver.com"
        }		
	];
	res.status(200);
	res.send(data);
});


app.get("/starbucks",(req,res)=>{
	const data = [
		{ name: '아메리카노', kcal: 5 },
		{ name: '아메리카노', kcal: 5 },
		{ name: '아메리카노', kcal: 5 },
		{ name: '아메리카노', kcal: 5 },
		{ name: '아메리카노', kcal: 5 },
		{ name: '아메리카노', kcal: 5 },
		{ name: '아메리카노', kcal: 5 },
		{ name: '아메리카노', kcal: 5 },
		{ name: '아메리카노', kcal: 5 },
		{ name: '아메리카노', kcal: 5 },
		{ name: '아메리카노', kcal: 5 },
		{ name: '메아리카노', kcal: 5 }
	]
	res.status(200);
	res.send(data);
})

app.listen(3000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!");
});