console.log("helloWorld 오랜만ㅎ");
console.log(getToken());

function getToken(){
	//문자열 패딩 기능
	const result = String(Math.floor(Math.random() * 1000000)).padStart(6,0);		
	return result;
}