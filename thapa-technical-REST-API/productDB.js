import connectDB from "./db/connect.js";
import Product from "./models/Products.js";
import dotenv from "dotenv";

// can import json in es6 as below but it is an experimental feature
// import ProductJson from "./products.json" assert { type: "json" };

// have to import json through require() statement but
// cannot use require() in es6 modules but
// we can create the require() the statement as below
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const ProductJson = require("./products.json");

dotenv.config();

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    // await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
