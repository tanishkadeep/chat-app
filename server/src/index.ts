import { WebSocketServer, WebSocket } from "ws";

const ws = new WebSocketServer({ port: 8080 });

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
