import express from "express";
import data from "./data";

const app = express();
const PORT = 5000;

app.length("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
