
const path = require('path')
const fn = require('../funcoes')

describe('Testing Files', () => {
  test('quantidade de arquivos na pasta', () => {
    const caminho = path.join(__dirname, '..', 'legendas')

    const qtdArquivos = fn.lerArquivos(caminho)
    expect(qtdArquivos.length).toBe(20)
  })
})
