import { WebSocketServer, WebSocket } from "ws";
import express from "express";
import cors from "cors";
import http from "http";

const app = express();
app.use(cors());

const server = http.createServer(app);
const ws = new WebSocketServer({ server });

app.get("/ping", (req, res) => {
  res.status(200).send("Server is alive");
});

interface User {
  socket: WebSocket;
  roomId: string;
}

let userCount: number = 0;
let allSockets: User[] = [];

ws.on("connection", function connection(socket: WebSocket) {
  console.log("user connected");

  userCount = userCount + 1;
  console.log(userCount);

  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message.toString());

    /*
    {
        "type" : "join",
        "payload" : {
            "roomId" : "adsadsads"
        }
    }
    */

    if (parsedMessage.type === "join") {
      allSockets.push({ socket, roomId: parsedMessage.payload.roomId });
    }

    /*
    {
        "type" : "chat",
        "payload" : {
            "message" : "hello"
        }
    }
    */

    if (parsedMessage.type === "chat") {
      const currentUserRoom = allSockets.find(
        (x) => x.socket == socket
      )?.roomId;

      allSockets.forEach((user) => {
        if (user.roomId === currentUserRoom) {
          user.socket.send(parsedMessage.payload.message);
        }
      });
    }
  });

  socket.on("close", () => {
    console.log("user disconnected");
    userCount = userCount - 1;
    console.log(userCount);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
