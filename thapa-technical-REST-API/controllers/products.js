import Product from "../models/Products.js";

const getAllProducts = async (req, res) => {
  const { company } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
    console.log(queryObject);
  }

  const data = await Product.find(queryObject);
  res.status(200).json({ data });
};

const getAllProductsTesting = async (req, res) => {
  const data = await Product.find(req.query);
  res.status(200).json({ data });
};

export { getAllProducts, getAllProductsTesting };
