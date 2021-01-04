const fs = require('fs')

const lerArquivos = caminho => {
  const arquivos = fs.readdirSync(caminho)
  return arquivos
}

module.exports = { lerArquivos }
