const express = require('express'); // Import express
const app = express(); // Inicializando express

app.get('/', function (req, res) {
  res.send('Hello User');
});

app.get('')

app.listen(4000, function (erro) {
  if (erro) {
    console.log('ocorreu um erro');
  } else {
    console.log('Servidor iniciado com sucesso!');
  }
});
