// const express = require('express') commonjs(legacy)
import express from "express"; // module
const app = express()

import {ProductController}  from './controllers/product.controller.js';
import {CouponController}  from './controllers/coupon.controller.js';

const productController = new ProductController();
const couponController = new CouponController();
// 상품 구매하기 API
app.get('/products/buy', productController.buyProduct);

// 상품 환불하기 API
app.post('/products/refund', productController.refundProduct);

// 쿠폰 구매하기 API
app.post('/coupons/buy', couponController.buyCoupon);

app.listen(3000);