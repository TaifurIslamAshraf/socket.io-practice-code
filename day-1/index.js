const express = require("express");
const app = express();
const http = require("http");

const expressServer = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New User connected");

  socket.on("disconnect", () => {
    console.log("User disconnect");
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

expressServer.listen(3000, () => {
  console.log(`server is running at http://localhost:3000`);
});
