//	facade pattern
export function checkPhone(param){
	if(param.length < 10 && param.length > 11){ //early-exit pattern
		console("에러 처리");
		return false;
	}		
	return true;
};

export function getToken(){
	return String(Math.floor(Math.random() * 1000000)).padStart(6,0);				
}

export function sendTokenToSMS(token){
	console.log(token);
}