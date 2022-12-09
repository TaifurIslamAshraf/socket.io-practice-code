const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const expressServer = http.createServer(app);
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("new user is connected");

  io.sockets.emit("myBrotcust", "This is my brotcust");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

expressServer.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
