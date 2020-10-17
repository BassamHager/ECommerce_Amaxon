// packages & libraries
import express from "express";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
// data
// import data from "./data";
// routes
import userRoute from './routes/userRoute'
import productRoute from './routes/productRoute'
import orderRoute from './routes/orderRoute'

// config
dotenv.config();
const mongodbUrl = config.MONGODB_URL;

// db connection
mongoose
    .connect(mongodbUrl, { useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useCreateIndex: true },console.log('db connected..'))
    .catch (err=> {console.error(err.reason); process.exit(1)})

// constants
const app = express();
const PORT = 5000;

// middleware & routes
app.use(bodyParser.json())
app.use('/api/users',userRoute)
app.use('/api/products',productRoute)
app.use('/api/orders',orderRoute)


app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}/api/products`)
);
