// packages & libraries
import express from "express";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// import path from "path";
// routes
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import orderRoute from "./routes/orderRoute";
import uploadRoute from "./routes/uploadRoute";
import { sendHttpErr } from "./util";

// config
dotenv.config();
const mongodbUrl = config.MONGODB_URL;

// constants
const app = express();
const PORT = config.PORT;

// middleware
app.use(bodyParser.json());
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

// routes
app.use("/api/uploads", uploadRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
// handle not existed routes
app.use((req, res, next) => {
  const error = sendHttpErr("Could not find this route.", 404);
  throw error;
});

// app.get('/api/config/paypal', (req, res) => {
//   res.send(config.PAYPAL_CLIENT_ID);
// });
// app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
// app.use(express.static(path.join(__dirname, '/../frontend/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
// });

// db connection
mongoose
  .connect(
    mongodbUrl,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    console.log("db connected..")
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server started at http://localhost:${PORT}/api/products`)
    )
  )
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
