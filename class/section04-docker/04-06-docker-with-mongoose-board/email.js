import nodemailer from "nodemailer";


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
	async sendTemplatePage(email, page){
		const EMAIL_USER = process.env.EMAIL_USER;
		const EMAIL_PASS = process.env.EMAIL_PASS;
		const EMAIL_SENDER = process.env.EMAIL_SENDER
    
		const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: EMAIL_USER,
			pass: EMAIL_PASS,
		}
		})
		const result = await transporter.sendMail({
			from: EMAIL_SENDER,
			to: email,
			subject: "가입을 축하합니다!!!",
			html: page
		})
		console.log(result)		
		}	
		}
export default Email;