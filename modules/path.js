const { Console } = require('console')
const path = require('path')

//apenas o nome do arquivo atual
console.log(path.basename(__filename));

// nome do diretório atual
console.log(path.dirname(__filename));

// Extensao do arquivo
console.log(path.extname(__filename));


// criar objeto path
console.log(path.parse(__filename));

// path.join juntar caminhos de arquivos
console.log(path.join(__dirname, 'teste', 'teste.hmtl'));