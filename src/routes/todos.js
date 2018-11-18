const express = require("express");
const routes = express.Router();

const todos = require("./../controllers/todosController");

routes.get("/show", todos.todos_all_get);
routes.post("/store", todos.todos_add_post);

module.exports = routes;