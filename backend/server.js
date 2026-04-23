const express = require('express')
const app = express()

app.use(express.json())

// Rota de teste
app.get('/', (req, res) => {
  res.json({ mensagem: 'Servidor NovaTech funcionando!' })
})

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})