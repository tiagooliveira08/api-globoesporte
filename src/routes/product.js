const express = require("express");
const routes = express.Router();

const productController = require("./../controllers/productController");

routes.get("/show", productController.product_all_show_get);
routes.get("/delete", productController.product_delete);

routes.get("/", (req, res) => {

	res.redirect(req.originalUrl + "/show");

})

module.exports = routes;