// download text files here
// https://www.learningcontainer.com/sample-text-file/
// npm i express-status-monitor

// a pipe connects a readable stream to writeable stream

res.sendFile(path.join(__dirname, 'index.html'));

// importing express
const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor");
const zlib = require("zlib");

// initializing express from app
const app = express();

app.use(status());

// localhost:3001/user
app.get("/", (req, res) => {
  const readStream = fs.createReadStream("./test1.txt", "utf-8");

  readStream.on("data", (chunk) => res.write(chunk));

  readStream.on("end", () => res.end());
});

// for zip operation
// 100MB file --> 100MC zip -> 100mb write
app.get("/zip", () => {
  fs.createReadStream("./test1.txt", "utf-8").pipe(
    zlib.createGzip().pipe(fs.createWriteStream("./sample.zip"))
  );
});

// make your server available on port 3001
app.listen(3001, () => console.log("listening on port 3001"));
