import fs from "fs";
import * as EmailMiddleWare from "./email.controller.js";


fs.readFile("./request_body.json", (err, data) => {

	EmailMiddleWare.createUser(JSON.parse(data), "res");
})
