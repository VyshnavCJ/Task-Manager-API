const express = require("express");
const app = express();
const task = require("./routers/task.js");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found-page");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();
//middleware
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static("./public"));

//routes

app.use("/api/v1/tasks", task);

app.use(notFound);

app.use(errorHandlerMiddleware);

//port
const port = process.env.PORT || 3000;

//start
async function start() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening on the port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

start();
