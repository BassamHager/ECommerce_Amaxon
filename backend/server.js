// packages & libraries
import express from "express";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
// data
import data from "./data";
// routes
import userRoute from './routes/userRoute'

// config
dotenv.config();
const mongodbUrl = config.MONGODB_URL;

// db connection
mongoose
    .connect(mongodbUrl, { useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useCreateIndex: true },console.log('db connected..'))
    .catch (err=> {console.error(err.reason)})

// constants
const app = express();
const PORT = 5000;

// middleware
app.use(bodyParser.json())
app.use('/api/users',userRoute)

// product
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) res.send(product);
  else res.status(404).send({ msg: "Product not found!" });
});

// products
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}/api/products`)
);
