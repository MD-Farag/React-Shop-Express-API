import express from "express";
const router = express.Router();
import { readFile } from "fs";

// Get all selectedItems
router.get("/selectedItems", (req, res) => {
	getAllItems(req, "./data/homeProducts.json", res, "selectedItems");
});

// Get single item from selectedItems
router.get("/selectedItems/:id", (req, res) => {
	getSingleItem(req, "./data/homeProducts.json", res, "selectedItems");
});

// Get all defaultSale
router.get("/defaultSale", (req, res) => {
	getAllItems(req, "./data/homeProducts.json", res, "defaultSale");
});

// Get single item from defaultSale
router.get("/defaultSale/:id", (req, res) => {
	getSingleItem(req, "./data/homeProducts.json", res, "defaultSale");
});

// Get all newArrivals
router.get("/newArrivals", (req, res) => {
	getAllItems(req, "./data/homeProducts.json", res, "newArrivals");
});

// Get single item from newArrivals
router.get("/newArrivals/:id", (req, res) => {
	getSingleItem(req, "./data/homeProducts.json", res, "newArrivals");
});

// Get all basic
router.get("/basic", (req, res) => {
	getAllItems(req, "./data/homeProducts.json", res, "basic");
});

// Get single item from basic
router.get("/basic/:id", (req, res) => {
	getSingleItem(req, "./data/homeProducts.json", res, "basic");
});

// Get all sale
router.get("/sale", (req, res) => {
	getAllItems(req, "./data/homeProducts.json", res, "sale");
});

// Get single item from sale
router.get("/sale/:id", (req, res) => {
	getSingleItem(req, "./data/homeProducts.json", res, "sale");
});

// Get all todayItems
router.get("/todayItems", (req, res) => {
	getAllItems(req, "./data/homeProducts.json", res, "todayItems");
});

// Get single item from todayItems
router.get("/todayItems/:id", (req, res) => {
	getSingleItem(req, "./data/homeProducts.json", res, "todayItems");
});

// Get all whyUs
router.get("/whyUs", (req, res) => {
	getAllItems(req, "./data/homeProducts.json", res, "whyUs");
});

// Get single item from todayItems
router.get("/whyUs/:id", (req, res) => {
	getSingleItem(req, "./data/homeProducts.json", res, "whyUs");
});

const getAllItems = (req, file, res, list) => {
	const limit = parseInt(req.query.limit);
	// console.log(req.originalUrl)
	let products = [];
	readFile(file, (err, data) => {
		if (!err) {
			products = JSON.parse(data.toString());
			if (!isNaN(limit) && limit > 0) {
				return res.status(200).json(products[list].slice(0, limit));
			}
			res.status(200).json(products[list]);
		}
		// console.log('error is: ', err)
	});
};

const getSingleItem = (req, file, res, list) => {
	const id = parseInt(req.params.id);
	let products = [];
	// console.log(req.originalUrl)
	readFile(file, (err, data) => {
		if (!err) {
			products = JSON.parse(data.toString());
			const product = products[list].find((product) => product.id == id);
			if (!product) {
				return res.status(404).json({ msg: `A product with id ${id} was not found` });
			}
			res.status(200).json(product);
		}
		// console.log('error is: ', err)
	});
};

export default router;
