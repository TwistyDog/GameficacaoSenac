const express = require("express");

const app = express();

app.use(express.json());


const visRoutes = require("./routes/vistRoute");
const cursRoutes = require("./routes/cursosRoutes");
const intRoute = require("./routes/intereRoutes");

module.exports = app;