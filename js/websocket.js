export const socket = new WebSocket("wss://YOUR_SERVER");

socket.onmessage = (msg) => {
  const data = JSON.parse(msg.data);
  console.log("Update:", data);
};
