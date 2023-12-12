import readline from "readline";
/*
# 1. 주민번호 만들기

1. 주민번호 뒷자리를 가리는 함수(customRegistrationNumber)를 하나 만들고,
해당 함수에 “210510-1010101” 와 같이 주민번호를 넣어서 실행하면 “210510-1******” 와 같은 형태로 콘솔에 출력되도록 만들어 주세요.

    1. 주민번호 가운데가 ”-”로 구성되어야 합니다. 
        - 그렇지 않을 경우 에러 메시지를 콘솔에 출력해 주세요.
            
            ex) ”에러 발생!!! 형식이 올바르지 않습니다!!!”
            
    2. 주민번호는 앞 6자리, 뒤 7자리로 구성되어야 합니다.
        - 그렇지 않을 경우 에러 메시지를 콘솔에 출력해 주세요.
            
            ex) ”에러 발생!!! 개수를 제대로 입력해 주세요!!!”
            
    3. 뒤 7자리 중, 끝 6자리는 *로 변경해서 콘솔에 출력해 주세요.
    4. 함수는 퍼사드 패턴이 적용되어야 합니다. 
        - 필요시 새로운 파일도 생성 가능합니다. - 파일명 자유
    5. 함수에 “210510-1010101”, “210510-1010101010101”, “2105101010101”를 각각 넣어 실행했을 때 아래의 출력 결과 예시와 동일하게 나타나면 됩니다.
*/

function customRegistrationNumber(regi_num){
	validCheck(regi_num).then((res)=>{
		console.log(res);
	}).catch((res)=>{
		console.log(res);
	})
}

function validCheck(regi_num){
	return new Promise((resolve, reject)=>{
		const hyphenCheck = /\d+-\d+/;
		if(!hyphenCheck.test(regi_num)){
			reject("에러 발생!!! 형식이 올바르지 않습니다.");
		}
		const lengthCheck = /^\d{6}-\d{7}$/;
		if(!lengthCheck.test(regi_num)){
			reject("에러 발생!!! 개수를 제대로 입력해 주세요!!!")
		}
		regi_num = regi_num.replace(/^(\d{6})-(\d{1})(\d{6})$/, `$1-$2******`);
		resolve(regi_num);
	})
}


customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-1010101010101");
customRegistrationNumber("2105101010101");