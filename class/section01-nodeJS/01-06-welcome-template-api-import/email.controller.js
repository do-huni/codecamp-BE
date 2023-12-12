import Email from './email.js';

const createUser = ((req, res)=>{
	const email = new Email(req);
	const isValid = email.emailValidCheck();	
	if(!isValid){
		console.log("유효성 검사 실패");
		// return;
	}		
	const templatePage = email.makePage();
	email.sendTemplatePage(templatePage);
});

export {createUser};