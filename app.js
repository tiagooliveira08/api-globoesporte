const express = require("express");
const mongoose = require("mongoose");
const port  = process.env.port || 3001;
const configDB = require("./assets/db/db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors("*"));


mongoose.connect(configDB, { useNewUrlParser : true});

const todos = require("./src/routes/todos");

app.use("/todos", todos);

app.listen(port, () => {
	
	console.log("server running in port", port);
});







