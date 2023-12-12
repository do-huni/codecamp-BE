class Email{
	constructor({email, name, age, school, created_at}){
		this.school = school;
		this.name = name;
		this.age = age;
		this.created_at = created_at;
		this.email = email;
	}
	
	emailValidCheck(){	
		const regexp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		return regexp.test(this.email);
	}

	makePage(){
		const page = `
		<html>
			<body>
				<h1>${this.name}님의 가입을 환영합니다!</h1>
				<hs>
				<div class = "container">
					<div>이름: ${this.name}</div>
					<div>나이: ${this.age}</div>
					<div>학교: ${this.school}</div>
					<div>가입일: ${this.created_at}</div>
				</div>
			</body>
		</html>
		`
		return page;
	}	
	sendTemplatePage(page){
		console.log(`${this.email}에게 페이지를 전달합니다`);
		console.log(page);
	}	
}
export default Email;