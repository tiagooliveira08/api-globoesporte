const mongoose = require("mongoose");

var todosSchema = new mongoose.Schema({
	title : { 
		type : String,
		required : true
	},
	status : {
		type : Boolean,
		default : false,
		required : true
	}

});


mongoose.model('Todos', todosSchema);

