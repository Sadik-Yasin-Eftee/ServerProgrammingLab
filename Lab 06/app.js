const express = require("express")
const path = require("path")
const multer = require("multer")
const app = express()
const router = require("./routers/routes");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));
app.set("view engine","ejs")
	
server_port = 3000;

app.use(router)

app.listen(server_port,function(error) {
	if(error) throw error
		console.log(`SERVER PORT RUNNING AT ${server_port}`)
})