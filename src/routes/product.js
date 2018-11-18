const express = require("express");
const routes = express.Router();

const productController = require("./../controllers/productController");

routes.get("/index", productController.index);
routes.get("/destroy", productController.destroy);

routes.get("/", (req, res) => {

	res.redirect(req.originalUrl + "/index");

})

module.exports = routes;