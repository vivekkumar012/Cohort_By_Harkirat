import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (server) => {
    console.log("Hi Connection")
    setInterval(() => {
        server.send("hello ram");
    }, 5000)
})