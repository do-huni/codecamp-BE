const name = "김도훈";
const email = "orangnlp@gmail.com";
const age = 23;
const school = "고려대학교";
const created_at = "2023-12-11";

const request_body = {name, email, age, school, created_at};

function emailValidCheck(email){	
	const regexp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	return regexp.test(email);
}

function makePage({name, age, school, created_at}){
	const page = `
	<html>
		<body>
			<h1>${name}님의 가입을 환영합니다!</h1>
			<hs>
			<div class = "container">
				<div>이름: ${name}</div>
				<div>나이: ${age}</div>
				<div>학고: ${school}</div>
				<div>가입일: ${created_at}</div>
			</div>
		</body>
	</html>
	`
	return page;
}
function sendTemplatePage(email, page){
	console.log(`${email}에게 페이지를 전달합니다`);
	console.log(page);
}
function createUser({name, email, age, school, created_at}){
	return new Promise((resolve, reject)=>{
		const isValid = emailValidCheck(email);
		
		if(!isValid){
			reject("유효성 검사 실패");
		}
		
		const templatePage = makePage({name, age, school, created_at})
		resolve({email, templatePage});
	})	
};


createUser(request_body).then(({email, templatePage})=>{
	sendTemplatePage(email, templatePage);
}).catch((res)=>{
	console.log(res);
})