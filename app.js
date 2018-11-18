const express = require("express");
const mongoose = require("mongoose");
const port  = process.env.port || 3001;
const configDB = require("./assets/private/db.js");
const app = express();

mongoose.connect(configDB, { useNewUrlParser : true});
app.listen(port, () => {
	
	console.log("server running in port", port);
});


app.get("/", (req, res) => {
	return res.send("index");
});






