// destructuring assignment
/*
구조분해할당의 이점
=> key의 이름으로 인자를 받기 때문에 순서 변경에 영향을 받지 않는다. 더 안전함!
*/
function getWelcomeTemplate({name, age, school, date}){
	
	const myTemplate = `
	<html>
		<body>
			<h1>${name}님의 가입을 환영합니다!</h1>
			<hs>
			<div class = "container">
				<div>이름: ${name}</div>
				<div>나이: ${age}</div>
				<div>학고: ${school}</div>
				<div>가입일: ${date}</div>
			</div>
		</body>
	</html>
	`
	console.log(myTemplate);
}

//shorthand-property
const name = "김도훈";
const age = 23;
const school = "고려대학교";
const date = "2023-12-11";

const req_body = {name, age, school, date};
getWelcomeTemplate(req_body);