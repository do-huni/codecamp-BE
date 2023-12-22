// const express = require('express') commonjs(legacy)
import express from "express"; // module
const app = express()

// 상품 구매하기 API
app.get('/products/buy', (res, req) => {
//  1. 가진 돈 검증 코드
	
// 	2. 판매 여부 검증 코드
	
// 	3. 상품 구매하는 코드
	
});

// 상품 환불하기 API
app.post('/products/refund', (res, req) => {
// 	1. 판매 여부 검증 코드
	
// 	2. 상품 환불하는 코드
	
});
app.listen(3000);