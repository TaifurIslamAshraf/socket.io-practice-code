const http = require("http");
const express = require("express");
const app = express();
const { Server } = require("socket.io");

const expressServer = http.createServer(app);
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("new user is connected");

  socket.on("chat", (msg) => {
    io.emit("myChat", msg);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

expressServer.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
