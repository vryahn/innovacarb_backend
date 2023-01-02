const express = require("express");
const cors=require("cors")
const app = express();


const config = require("./src/lib/config");
const db = require("./src/lib/db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "El API ya funciona" });
  });
  
  // Ejecutando el servidor HTTP
  app.listen(config.app.port, async () => {
    console.log(`Esuchando peticiones HTTP en el puerto ${config.app.port}`);
  
    try {
      await db.connect();
      console.log("DB is connected 🤠");
    } catch (err) {
      console.error("Connection refused:", err);
    }
  });