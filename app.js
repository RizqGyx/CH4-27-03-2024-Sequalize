const express = require("express");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");

const router = require("./routes/index");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(flash());
app.use(session({ secret: "rizki", saveUninitialized: true, resave: true }));
app.use(express.static(`${__dirname}/public`));

// View Enggine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello FSW 1");
});

app.use(router);

module.exports = app;
