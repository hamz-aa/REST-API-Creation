const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "get all products" });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "get all products testing" });
};

export { getAllProducts, getAllProductsTesting };
