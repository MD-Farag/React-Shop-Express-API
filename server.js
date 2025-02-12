import express from "express";
import cors from "cors";
import products from "./routes/products.js";
import header from "./routes/header.js";
import homeProducts from "./routes/homeProducts.js";

const app = express();

// CORS configuration
const corsOptions = {
	origin: [
	  'https://react-shop-frontend.onrender.com',  // frontend on Render
	  'http://localhost:3000',                      // frontend running locally
	],
	methods: 'GET,POST,PUT,DELETE',
	allowedHeaders: 'Content-Type,Authorization',
  };

// Default to process.env.PORT or 5000 for local development
const PORT = process.env.PORT || 5000;

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

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
