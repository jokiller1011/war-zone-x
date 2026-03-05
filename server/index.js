import { WebSocketServer } from "ws";

const PORT = process.env.PORT || 10000;
const wss = new WebSocketServer({ port: PORT });

wss.on("connection", ws => {
  ws.on("message", msg => {
    wss.clients.forEach(c => {
      if (c.readyState === 1) c.send(msg.toString());
    });
  });
});

console.log("WebSocket running on", PORT);
