// const express = require('express') commonjs(legacy)
// -g로 설치 안한 경우 터미널에서 명령을 실행하려면 package.json에 scripts에 넣어서 실행해야함!
import express from "express"; // module
const app = express()

app.get('/', function (req, res) {
	res.status(201);
	res.send({message: 'Hello World'});
});

app.listen(3000);