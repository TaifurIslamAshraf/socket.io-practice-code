const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const expressServer = http.createServer(app);
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("new user connected");

  socket.on("disconnected", () => {
    console.log("user disconnected");
  });

  // setInterval(() => {
  //   const date = new Date();
  //   const time = date.getTime();

  //   //emit function use for create custom event
  //   socket.emit("timeEvent",time);
  // }, 50);

  socket.on("inpValue", (msg) => {
    console.log(msg);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

expressServer.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
