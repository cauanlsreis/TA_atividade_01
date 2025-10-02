# Monitor de Jogadores - Mapa de Calor ⚽

Sistema de monitoramento em tempo real que simula sensores de jogadores de futebol, exibindo dados biométricos e posicionais em um mapa de calor interativo.

## 🎯 O que o Projeto Faz

Este sistema simula **sensores em jogadores de futebol** que transmitem:
- **Batimentos cardíacos (BPM)**: 70-180 bpm
- **Velocidade**: 0-25 km/h  
- **Posição no campo**: Coordenadas (x,y) de 5-95%

Os dados são enviados via **Socket.IO** em tempo real para todos os clientes conectados, criando um **mapa de calor visual** que mostra as áreas de maior atividade no campo.

## 🚀 Funcionalidades Principais

### 📊 **Monitoramento Individual**
- Cada jogador recebe um **ID numérico único** (1, 2, 3...)
- Dados pessoais exibidos em tempo real
- **Cores aleatórias** para identificação visual

### 🗺️ **Mapa de Calor Dinâmico**
- **Campo de futebol oficial** desenhado em canvas
- **3 níveis de intensidade**:
  - 🟡 **Amarelo**: Baixa atividade (< 30%)
  - 🟠 **Laranja**: Média atividade (30-70%)
  - 🔴 **Vermelho**: Alta atividade (> 70%)
- Histórico dos últimos **30 pontos** por jogador
- Transparência gradual (pontos antigos desvanecem)

### 👥 **Sistema Multi-Jogador**
- **Conexão automática**: Cada aba = novo jogador
- **Sincronização global**: Todos veem todos os jogadores
- **Desconexão limpa**: Remove automaticamente jogadores que saem

## 🔧 Como Funciona Tecnicamente

### **Backend (server.js)**
```javascript
// Gera dados aleatórios a cada 1 segundo
setInterval(() => {
  connectedPlayers.forEach((playerId) => {
    const dados = {
      id: playerId,
      bpm: 70-180,           // Batimentos
      velocidade: 0-25,      // km/h
      posicao: {x: 5-95, y: 5-95}  // Coordenadas
    };
    io.emit('dadosJogador', dados);  // Envia para todos
  });
}, 1000);
```

### **Frontend (index.html)**
- **Canvas 800x500px**: Desenha campo + mapa de calor
- **Socket.IO Client**: Recebe dados em tempo real  
- **Algoritmo de Intensidade**: `velocidade × 2 + BPM ÷ 10`
- **10 cores únicas**: Cada jogador tem cor aleatória

## 🛠️ Tecnologias Utilizadas

- **Node.js** + Express (servidor)
- **Socket.IO** (comunicação tempo real)
- **HTML5 Canvas** (renderização gráfica)
- **CSS3** (interface responsiva)

## � Instalação e Uso

### **1. Instalar Dependências**
```bash
npm install
```

### **2. Executar Servidor**
```bash
npm start
```

### **3. Acessar Sistema**
- Abra: `http://localhost:3000`
- **Múltiplos jogadores**: Abra várias abas/janelas

## 🎮 Experiência do Usuário

1. **Conecta automaticamente** → Recebe ID único
2. **Ve seus dados** → BPM, velocidade, posição
3. **Observa o campo** → Mapa de calor em tempo real
4. **Identifica jogadores** → Cores únicas para cada um
5. **Simula time** → Abra mais abas para mais jogadores

## 🎨 Interface Visual

### **Identificação de Jogadores**
- **Seu jogador**: Bolinha preta com borda colorida
- **Outros jogadores**: Bolinhas coloridas com borda preta
- **Mapa de calor**: Gradientes amarelo → laranja → vermelho

### **Layout Responsivo**
- Container centralizado (máx. 1000px)
- Cards com sombras e bordas arredondadas
- Campo proporcionalmente desenhado

## 📁 Estrutura de Arquivos

```
├── index.html          # Interface + JavaScript
├── style.css           # Estilos visuais
├── server.js           # Servidor Socket.IO
├── package.json        # Dependências Node.js
└── README.md           # Documentação
```

## 🔍 Detalhes Técnicos

- **Atualização**: 1 segundo
- **Histórico**: 30 pontos por jogador
- **Cores**: 10 opções aleatórias
- **Campo**: Proporções oficiais
- **Performance**: Otimizado para múltiplos jogadores

---

**Projeto educacional** para demonstração de comunicação em tempo real e visualização de dados esportivos. 🚀