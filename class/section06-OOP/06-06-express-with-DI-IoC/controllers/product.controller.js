export class ProductController{
	
	cashService;
	productService;
	
	constructor(cashService, productService){
		this.cashService = cashService;
		this.productService = productService;
	}
	buyProduct = (req, res) => {
	//  1. 가진 돈 검증 코드
		const hasMoney = this.cashService.checkValue();
	// 	2. 판매 여부 검증 코드
		const isSoldout = this.productService.checkSoldout();	
	// 	3. 상품 구매하는 코드
		if(hasMoney && !isSoldout){
			res.send("상품 구매 완료");
		}	
	}
	refundProduct = (req, res) => {
	// 	1. 판매 여부 검증 코드
		const isSoldout = this.productService.checkSoldout();		
	// 	2. 상품 환불하는 코드
		if(isSoldout){
			res.send("상품 환불 완료");
		}		
	}
}
