const express = require("express");
const app = express();
const http = require("http").createServer(app);

const PORT = process.env.PORT || 3220;
http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// Socket
const io = require("socket.io")(http);
var connectedUsers = {};
var userbox = {};

io.on("connection", (socket) => {
  console.log("Connected...");
  console.log(socket.id);
  /*Register connected user*/
  socket.emit('hi',{msg:" hi sir"})
  socket.on("register", async function (username) {
   socket.emit("register",{msg:` Your name is ${username.name}`})
  });
  
});