const { error } = require('console');
const fs = require('fs');
const path = require('path');

//criar pastas
/*fs.mkdir(path.join(__dirname, '/teste'), (error) =>{
    if (error){
      return console.log("Erro: ", error);
    }
  v
});*/

// Criar Arquivo
fs.appendFile(path.join(__dirname, "/teste", "test.txt"),"hello node", (error) =>{
    if (error) {
        return console.log("erro ", error);
        
    }
    console.log("Arquivo criada com sucesso");
}
);

// Ler aquivos
fs.readFile(path.join(__dirname, "/teste" , 'test.txt'), 'utf8',(error,data)=>{
    if (error) {
        return console.log("erro ", error);
        
    }
    console.log(data);
}
);