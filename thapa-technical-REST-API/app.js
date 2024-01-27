import express from "express";
import product_routes from "./routes/products.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("I am live!");
});

app.use("/api/products", product_routes);

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server Live at http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
