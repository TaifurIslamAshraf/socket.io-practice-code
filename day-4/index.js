const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const expressServer = http.createServer(app);
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("new User is connected");

  io.sockets.emit("myBrotcust", "Hello Everyone !");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

expressServer.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
