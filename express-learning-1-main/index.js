const express = require("express");
const connectDb = require("./db");
const booksRouter = require("./routes/books");

// Load environment variables from .env file
require("dotenv").config();
// Connect to MongoDB

connectDb();
const app = express();
app.use(express.json());


const PORT = 3001;

// books  routes
app.use("/api/books", booksRouter);

// event routes
const eventRouter = require("./routes/event");
app.use("/api/event", eventRouter);

// users routes
const usersRouter = require("./routes/users");
app.use("/api/users", usersRouter);


app.listen(PORT, () => console.log(`listening on port ${PORT}`));
