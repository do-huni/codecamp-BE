// 1개 테스트 하기
it("더하기 테스트", () => {
	const a = 1;
	const b = 2;
	
	expect(a + b).toBe(3);
});

// 그룹단위 테스트 하기
describe("나의 테스트 그룹", ()=>{
	const a = 1;
	const b = 2;
	it("빼기 테스트", () => {
		expect(a - b).toBe(-1);
	});
	it("곱하기 테스트", () => {
		expect(a * b).toBe(2);
	});
})

// 상품 구매하기 테스트 예저
describe("상품구매테스트", () => {
	
	beforeAll(()=>{}); // 모든 it들 실행하기 전에 딱 한번 실행 ex)로그인 등
	beforeEach(()=>{}); // 각각의 it를 실행하기 전에 매번 실행
	
	
	it("돈 검증", () => {
		const result = true;
		expect(result).toBe(true);
	});

	
	
	it("상품 구매", async () => {
		const result = await new Promise((resolve, reject) => {
			resolve(true);
		});
		expect(result).toBe(true);
	})
	
})