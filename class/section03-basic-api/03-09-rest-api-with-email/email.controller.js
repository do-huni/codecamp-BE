import Email from './email.js';

const createUser = ((req, res)=>{
	const myemail = req.email;
	const email = new Email(req);
	console.log(req);
	const isValid = email.emailValidCheck();	
	if(!isValid){
		console.log("유효성 검사 실패");
		return;
	}		
	const templatePage = email.makePage();
	email.sendTemplatePage(myemail, templatePage);
});

export {createUser};