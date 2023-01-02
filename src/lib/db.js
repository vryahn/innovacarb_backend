const mongoose = require("mongoose");
//para conectarme a la bd
const config = require("./config");
const { user, password,host } = config.db;
const urldb= `mongodb+srv://${user}:${password}@${host}/devto_DB?retryWrites=true&w=majority`

//Crear una funcion que nos permita conectarnos a la DB

const connect = () => {
  return new Promise((resolve, reject) => {
      mongoose.connect(urldb, (err) => {
        
          if (err) reject(err);
          resolve("Dabase Online");
      });
  })
}

module.exports={connect};