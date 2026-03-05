export const socket = new WebSocket("wss://https://war-zone-x.onrender.com");

socket.onmessage = (msg) => {
  const data = JSON.parse(msg.data);
  console.log("Update:", data);
};
