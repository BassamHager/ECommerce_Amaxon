// packages & libraries
import express from "express";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
// routes
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import orderRoute from "./routes/orderRoute";
import uploadRoute from "./routes/uploadRoute";

// config
dotenv.config();
const mongodbUrl = config.MONGODB_URL;

// db connection
mongoose
  .connect(
    mongodbUrl,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    console.log("db connected..")
  )
  .catch((err) => {
    console.error(err.reason);
    process.exit(1);
  });

// constants
const app = express();
const PORT = config.PORT;

// middleware
app.use(bodyParser.json());

// routes
app.use("/api/uploads", uploadRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

// app.get('/api/config/paypal', (req, res) => {
//   res.send(config.PAYPAL_CLIENT_ID);
// });
// app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
// app.use(express.static(path.join(__dirname, '/../frontend/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
// });

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}/api/products`)
);
