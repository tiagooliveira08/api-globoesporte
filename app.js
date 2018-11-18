const express = require("express");
const mongoose = require("mongoose");
const port  = process.env.port || 3001;
const configDB = require("./assets/db/db");
const app = express();
app.use(express.json());

mongoose.connect(configDB, { useNewUrlParser : true});

const todos = require("./src/routes/todos");
const products = require("./src/routes/product");

app.use("/todos", todos);
app.use("/products", products);

app.listen(port, () => {
	
	console.log("server running in port", port);
});







