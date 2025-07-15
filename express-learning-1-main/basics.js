// importing express
const express = require("express");
const fs = require("fs");
const zlib = require("zlib");

// initializing express from app
const app = express();

app.use(express.json());

const statusMonitor = require("express-status-monitor")();
app.use(statusMonitor);

app.get("/status", statusMonitor.pageRoute);

// localhost:3001/user
app.get("/", (req, res) => {
  console.log("Got a new new request from Aman!");

  // res.json

  return res.send("Recieved your request");
});

// linkedin.com/in/amangupta

app.post("/add-user", (req, res) => {
  const userData = req.body;

  console.log(userData);
  res.send("got a post request");
});

app.get("/user/:userId", (req, res) => {
  const pathData = req.params;

  console.log(pathData);

  res.send("check your terminal");
});

app.get("/users", (req, res) => {
  const data = req.query;

  console.log(data);

  res.send("check your terminal");
});

app.get("/get-file", (req, res) => {
  // read the file content

  const myWriteStream = fs.createWriteStream("sample.zip", "utf-8");

  fs.createReadStream("test1.txt", "utf-8").pipe(
    zlib.createGzip().pipe(myWriteStream)
  );

  return res.send("check files");
});

// make your server available on port 3001
app.listen(3001, () => console.log("listening on port 3001"));
