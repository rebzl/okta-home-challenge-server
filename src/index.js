// import express
const express = require("express");
// import middlewares
const morgan = require("morgan");
const expressValidator = require("express-validator");
const cors = require("cors"); // Allows to manage the frontend project in a different route
// import routes
const mongoose = require("mongoose");
const taskRoutes = require("./routes/task");

// load env variables
require("dotenv").config();

// app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(expressValidator());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors());

// routes middleware
app.use("/api", taskRoutes);
console.log(process.env.PORT);
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//---------------------------------------------------------

// import mongoose

// db connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
    console.log(`DB connection error: ${err.message}`);
});
mongoose.connection.once("open", () => {
    console.log(`DB Connected`);
});
