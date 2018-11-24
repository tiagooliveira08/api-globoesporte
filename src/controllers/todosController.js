
const mongoose = require("mongoose");

require("./../models/todosModel");

const Todos = mongoose.model("Todos");

exports.index =  async function(req, res) {
		
	let todos = await Todos.find({});

	res.json(todos);
}

exports.store =  async function(req, res) { 
	
	let todos = await Todos.create(req.body);

	res.json(todos);
}

exports.destroy = async (req, res) => {

	console.log(req.params.id);

	let todos = await Todos.findByIdAndRemove(req.params.id);
	res.send(todos); 
}