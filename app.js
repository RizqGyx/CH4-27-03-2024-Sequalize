const express = require("express");
const morgan = require("morgan");

const router = require("./routes/index");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// View Enggine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/customers", router);

module.exports = app;
