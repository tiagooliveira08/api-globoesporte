const express = require("express");
const routes = express.Router();

const todos = require("./../controllers/todosController");

routes.get("/index", todos.index);
routes.post("/store", todos.store);
routes.put("/update/:id", todos.update);
routes.delete("/destroy/:id", todos.destroy);


routes.get("/", (req, res) => { 

	res.redirect(req.originalUrl + "/index");
});

module.exports = routes;