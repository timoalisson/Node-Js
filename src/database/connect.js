const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.d4ob9gb.mongodb.net/?retryWrites=true&w=majority`,
      
    );
    console.log("Conexão com o banco de dados realizada com sucesso!");
} catch (error) {
  console.error("Ocorreu um erro ao se conectar com o banco de dados: ", error);
}
    
  };
  
  module.exports = connectToDatabase;
  
  
  
  
  
  