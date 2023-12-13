/*	bad EX
function createTokenOfPhone(param){
// 	1. param 자릿수 확인(10~11자리)
	if(param.length >= 10 && param.length <= 11){
// 	2. 인증번호 6자리 만들기	
		const result = String(Math.floor(Math.random() * 1000000)).padStart(6,0);			
		return result;
// 	3. 핸드폰 번호에 토큰 전송(나중에!)		
	} else{
		console("에러 처리");
	}
}
*/

// good EX
function createTokenOfPhone(param){
// 	
// 	1. param 자릿수 확인(10~11자리)
	if(param.length < 10 && param.length > 11){ //early-exit pattern
		console("에러 처리");
		return "";
	}	
// 	2. 인증번호 6자리 만들기	
	const result = String(Math.floor(Math.random() * 1000000)).padStart(6,0);			
	return result;
// 	3. 핸드폰 번호에 토큰 전송(나중에!)		
}


const arg = "01033357862";
console.log(createTokenOfPhone(arg));