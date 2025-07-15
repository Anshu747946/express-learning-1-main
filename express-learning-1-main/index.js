const express = require("express");
const connectDb = require("./db");
const booksRouter = require("./routes/books");

connectDb();
const app = express();
app.use(express.json());


const PORT = 3001;

// books  routes
app.use("/api/books", booksRouter);

// event routes
const eventRouter = require("./routes/event");
app.use("/api/event", eventRouter);


app.listen(PORT, () => console.log(`listening on port ${PORT}`));
