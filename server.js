
module.exports = function(app) { 

const express = require("express");
const port = process.env.port || 3001;

app.listen(port, () => {
	console.log("server running in port ", port)
});

} ;