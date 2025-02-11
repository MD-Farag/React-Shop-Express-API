import express from "express";
import products from "./routes/products.js";
import header from "./routes/header.js";
import homeProducts from "./routes/homeProducts.js";

const app = express();
const cors = require("cors");


// Default to process.env.PORT or 5000 for local development
const PORT = process.env.PORT || 5000;

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

// Setup static folder
app.use(express.static("assets"));
// app.use(express.static('data'))

//====== Routes ======//

// products Route
app.use("/api/products", products);

// Header Route
app.use("/api", header);

// homeProducts Route
app.use("/api", homeProducts);

app.listen(PORT, () => {
	console.log(`server runing on port ${PORT}`);
});
