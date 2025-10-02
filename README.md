# Monitor de Jogadores - Mapa de Calor ⚽

Sistema de monitoramento em tempo real que simula sensores de jogadores de futebol com mapa de calor visual.

## 🎯 Funcionalidades

- **Sensores simulados**: BPM (70-180), velocidade (0-25 km/h), posição (x,y)
- **Mapa de calor**: Visualização em 3 níveis (amarelo/laranja/vermelho)  
- **Multi-jogador**: Cada aba = novo jogador com ID único e cor aleatória
- **Tempo real**: Dados via Socket.IO atualizados a cada segundo

## 🛠️ Tecnologias

- Node.js + Express + Socket.IO
- HTML5 Canvas + CSS3

## 🚀 Como Usar

```bash
npm install
npm start
```

Acesse: `http://localhost:3000`

**Para múltiplos jogadores**: Abra várias abas/janelas

## 📁 Estrutura

```
├── index.html          # Interface + JavaScript
├── style.css           # Estilos
├── server.js           # Servidor Socket.IO
├── package.json        # Dependências
└── README.md           # Documentação
```

---
**Projeto educacional** - Comunicação em tempo real e visualização de dados esportivos 🚀