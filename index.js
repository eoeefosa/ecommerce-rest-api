"use strict";

require(`dotenv`).config();
// require('dotenv/config');
const express = require("express");
const mongoose = require("mongoose");
const localmongo = process.env.LOCALDB;

mongoose.connect(localmongo);

const database = mongoose.connection;

database.on(`error`, (error) => {
  console.log(error);
});

database.once(`connected`, () => {
  console.log(`Database Connected`);
});

const app = express();

app.use(express.json());
// app.use('/public/uploads', express)

const routes = require("./routes/routes");
const productroutes = require("./views/productapi");

app.use("/api", routes);
app.use("/api", productroutes);

app.get("/", (req, res) => {
  res.send("Go to /api/");
});
app.get("/api", (req, res) => {
  res.send("Go to /api/");
});

app.listen(3000, () => {
  console.log(`server started as ${3000}`);
});
