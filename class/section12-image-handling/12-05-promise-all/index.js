const fetchData = async() => {
	console.time("구린버전")
	await new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("성공")
		}, 2000);
	})
	
	await new Promise(function(resolve, reject){
		setTimeout(()=>resolve("성공!"), 3000);
	}) 
	
	function myPromiseFunction(resolve, reject){
		setTimeout(()=>resolve("성공"), 1000);
	}
	await new Promise(myPromiseFunction);
	
	console.timeEnd("구린버전")
}

const fetchSyncData = async ()=>{
	console.time("promise.all 버전");
	const results = Promise.all([
		new Promise((resolve, reject) => setTimeout(()=>resolve("성공"),3000)),
		new Promise((resolve, reject) => setTimeout(()=>resolve("성공"),2000)),
		new Promise((resolve, reject) => setTimeout(()=>resolve("성공"),1000)),		
	]);
	console.log(results)
	results.then((data)=>{
		console.log(data);
		console.timeEnd("promise.all 버전");		
	})
}
fetchData()
fetchSyncData()