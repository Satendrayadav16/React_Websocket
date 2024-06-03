import express from "express";
import http from "http";
import * as socketio from "socket.io";

const port = 5000;

const app = express();

const server = new socketio.Server({
  cors: {
    origin: "*",
  },
});

let timeChange;

server.on("connection", (socket) => {
  console.log("web socket connected", socket.id);
  if (timeChange) {
    clearInterval(timeChange);
  }
  setInterval(() => socket.emit("message", new Date()), 1000);
});

const httpServer = http.createServer(app);

httpServer.listen(port);
