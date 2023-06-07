const express = require("express");

const productController = require("../controller/product");

const router = express.Router();

router.get("/products", productController.getProducts);

router.post("/product", productController.createProduct);

module.exports = router;
