

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Configura o body-parser para lidar com dados de formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para lidar com o envio do formulário de cadastro de alimentos
app.post('/cadastro-alimentos', (req, res) => {
  const data = req.body;

  // Lê o arquivo JSON atual, se existir
  let jsonData = [];
  if (fs.existsSync('alimentos.json')) {
    const fileData = fs.readFileSync('alimentos.json');
    jsonData = JSON.parse(fileData);
  }

  // Adiciona o novo alimento aos dados existentes
  jsonData.push(data);

  // Salva os dados atualizados no arquivo JSON
  fs.writeFileSync('alimentos.json', JSON.stringify(jsonData, null, 2));

  res.send('Dados do alimento cadastrados com sucesso!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});






// Configura o body-parser para lidar com dados de formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para lidar com o envio do formulário de cadastro de receptores
app.post('/cadastro-receptores', (req, res) => {
  const data = req.body;

  // Lê o arquivo JSON atual, se existir
  let jsonData = [];
  if (fs.existsSync('receptores.json')) {
    const fileData = fs.readFileSync('receptores.json');
    jsonData = JSON.parse(fileData);
  }

  // Adiciona o novo receptor aos dados existentes
  jsonData.push(data);

  // Salva os dados atualizados no arquivo JSON
  fs.writeFileSync('receptores.json', JSON.stringify(jsonData, null, 2));

  res.send('Dados do receptor cadastrados com sucesso!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});


// PARA GRAVAR NO FRM_RECEPTORES


