const express = require("express");
//import express from "express";
//import data from "./data";-
//import dotenv from "dotenv";-
//import config from "./config";-
//import mongoose from "mongoose";
const mongoose = require("mongoose");
//import userRoute from "./routes/userRoute";
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
//import orderRoute from "./routes/orderRoute";
//import productRoute from "./routes/productRoute";
//import bodyParser from "body-parser";
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
/*app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});*/
/*app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded());*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/products", productRoute);

const MONGODB_URL = process.env.MONGODB_URL;

const connection = mongoose.connect(MONGODB_URL, {
  promiseLibrary: global.Promise,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", (err) => {
  console.log(`"Database connection successful"`);
});

mongoose.connection.on("error", (err) => {
  console.log(`Database connection error: ${err.message}`);
});

mongoose.connection.on("disconnected", (err) => {
  console.log(`Database disconnected`);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server runs at http://localhost:5000");
});
