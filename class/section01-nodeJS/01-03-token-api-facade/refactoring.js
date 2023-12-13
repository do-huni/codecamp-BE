//	facade pattern
function checkPhone(param){
	if(param.length < 10 && param.length > 11){ //early-exit pattern
		console("에러 처리");
		return false;
	}		
	return true;
}

function getToken(){
	return String(Math.floor(Math.random() * 1000000)).padStart(6,0);				
}

function sendTokenToSMS(token){
	console.log(token);
}

function createTokenOfPhone(param){
	const isValid = checkPhone(param)
	if(!isValid) return;	
	const token = getToken();	
	sendTokenToSMS(token);
}


createTokenOfPhone("01033357862");