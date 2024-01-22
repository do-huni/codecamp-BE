const fetchData = async () => {	
	
	console.log("API request");
	// API 보내기 요청	
	const result = await new Promise((resolve, reject) => {	
		try{		
			let data = "";
			setTimeout(()=>{
			console.log("be: storage에서 이미지 받음"); // 5초 뒤에 이미지 받아옴		
			data = "강아지.jpg";
			resolve(data);				
		}, 5000)
		} catch (error){
			console.log("에러!")
			reject("error");
		}
	});
	
	console.log("===서버로그===\n" + result + "\n==============");

	
	return result;
}

fetchData().then((result)=>{
	console.log("프론트에서 결과 출력: " + result);
})