const Books = require("../model/books");

const getBooksController = (req, res) => {
  console.log("hello from get req");

  res.send("Hello from get resquest");
};

const addBookController = async (req, res) => {
  try{
  //get the book data from the request body
  const bookData = req.body;
  // console.log("Book data received:", bookData);
  //add a book to the database
  console.log("Adding book:", bookData);
  const result = await Books.create({ ...bookData});
  if (result) {
    console.log("Book added successfully:", result);
  }
  else{
    res.status(500).send("Failed to add book");
    return;
  }
  // console.log("Book added successfully:", result);
  res.status(200).send("Book added successfully");
  

  // res.send("Book added successfully");
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).send("Internal Server Error");
  }
  // console.log("hello from post req");

  // res.send("Hello from post resquest");
};

module.exports = {
  addBookController,
  getBooksController,
};
