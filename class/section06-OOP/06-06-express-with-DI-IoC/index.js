// const express = require('express') commonjs(legacy)
import express from "express"; // module
const app = express()

// services
import {CashService} from '../services/cash.service.js';
import {PointService} from '../services/point.service.js';
import {ProductService} from '../services/product.service.js';

// controllers
import {ProductController}  from './controllers/product.controller.js';
import {CouponController}  from './controllers/coupon.controller.js';
												// 의존성 주입으로 발생하는 장점
const cashService = new CashService();			// 1. new 한번으로 모든 곳에서 재사용 가능(싱글톤 패턴)
const pointService = new PointService();		// 2. 의존성 주입으로 몽땅 한꺼번에 변경 가능
const productService = new ProductService();	// 3. 의존성 주입으로 쿠폰 구매 방식을 포인트 결제로 안전하게 변경 가능

												// [부가 설명]
												// 1. ProductControllerr가 CashService에 의존하고 있음. (이 상황을 tight-coupling이라고 부름)
const productController = new ProductController(cashService, productService);
const couponController = new CouponController(pointService);
// 상품 구매하기 API
app.get('/products/buy', productController.buyProduct);

// 상품 환불하기 API
app.post('/products/refund', productController.refundProduct);

// 쿠폰 구매하기 API
app.post('/coupons/buy', couponController.buyCoupon);

app.listen(3000);