import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// The GraphQL schema
const typeDefs = `#graphql
  
  input CreateBoardInput{
  	writer: String!,
	title: String!,
	contents: String!  
  }

  type MyResult {
  	number: Int,
	writer: String,
	title: String,
	contents: String
  }
  type Query {
  	fetchBoards: [MyResult]
  }  
  
  type Mutation {
  	createBoard(CreateBoardInput: CreateBoardInput!): String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  	Query: {
// 		안쓰는 인자 앞 부분은 _로 처리, 뒷 부분은 생략
	    fetchBoards: (_, args) => {
			// 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
			const result = [
			{ number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요!!!" },
			{ number: 2, writer: "영희", title: "영희입니다~~", contents: "영희이에요!!!" },
			{ number: 3, writer: "훈이", title: "훈이입니다~~", contents: "훈이이에요!!!" },
			]

			// 2. 꺼내온 결과 응답 주기						
			return result;
		}
  	},
	Mutation:{
		createBoard: (parent, args, context, info)=>{
		// 1. 브라우저에서 보내준 데이터 확인하기
			console.log(args.CreateBoardInput);
			
		// 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

		// 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
		return "게시물 등록에 성공하였습니다.";
		}
	}

};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  // cors: {origin: ["www.naver.com", "*"]}
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 3000 },	
})
console.log(`🚀 Server ready at ${url}`);