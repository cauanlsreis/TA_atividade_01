const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(express.static('.'));

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" }});

let connectedPlayers = new Map();
let playerCounter = 0;

function gerarDadosJogador(id) {
  return {
    id,
    bpm: Math.floor(Math.random() * (180 - 70 + 1)) + 70,
    velocidade: (Math.random() * 25).toFixed(1),
    posicao: { 
      x: Math.floor(Math.random() * 90) + 5, 
      y: Math.floor(Math.random() * 90) + 5 
    },
    timestamp: Date.now()
  };
}

io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  socket.on('requestPlayerId', () => {
    playerCounter++;
    const playerId = playerCounter;
    
    connectedPlayers.set(socket.id, playerId);
    socket.emit('playerIdAssigned', playerId);
    
    console.log(`${playerId} conectado`);
  });

  socket.on('disconnect', () => {
    const playerId = connectedPlayers.get(socket.id);
    if (playerId) {
      console.log(`${playerId} desconectado`);
      io.emit('playerDisconnected', playerId);
      connectedPlayers.delete(socket.id);
    }
  });
});

// Envia dados a cada segundo
setInterval(() => {
  connectedPlayers.forEach((playerId) => {
    const dados = gerarDadosJogador(playerId);
    io.emit('dadosJogador', dados);
  });
}, 1000);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
