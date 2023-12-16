// const express = require('express') commonjs(legacy)
import express from "express"; // module
const app = express()

app.get('/', function (req, res) {
	res.status(201);
	res.send({message: 'Hello World'});
});

app.listen(3000);