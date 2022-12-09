const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const PORT = 3000;

const expressServer = http.createServer(app);
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("new user is connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  //   setTimeout(() => {
  //     socket.send("Reale time data transmition on socket");
  //   }, 5000);

  setInterval(() => {
    const date = new Date();
    const time = date.getTime();
    socket.send(time);
  }, 10);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

expressServer.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
