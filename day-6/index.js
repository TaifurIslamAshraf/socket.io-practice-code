const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const expressServer = http.createServer(app);
const io = new Server(expressServer);

let buyNSP = io.of("/buy");
buyNSP.on("connection", (socket) => {
  buyNSP.emit("myEvent", "Hello buy");
});

let sellNSP = io.of("/sell");
sellNSP.on("connection", (socket) => {
  sellNSP.emit("myEvent", "Hello Sell");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

expressServer.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
