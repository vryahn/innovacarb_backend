const express = require("express");
const cors=require("cors")
const app = express();
const apiRouter=require("./src/routes");

const config = require("./src/lib/config");
const db = require("./src/lib/db");

app.use(cors());
app.use(express.json());
apiRouter(app);

app.get("/", (req, res) => {
    res.json({ message: "El Servidor ya escucha :P" });
  });

  app.listen(config.app.port, async () => {
    console.log(`Esuchando peticiones HTTP en el puerto ${config.app.port}`);
  
    try {
      await db.connect();
      console.log("DB is connected");
    } catch (err) {
      console.error("Connection refused:", err);
    }
  });

// stripe integration

const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51AyqVLA8JjQ11CV0rRRKk7waYtdCpssgh3bN0YQG7jXX9HklUGfuULv6j2xJnQxI2t4GqJ3pbzwB0jwH8DEn1h2l00icemqelk");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {

  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "MXN",
      description: "Donativo",
      payment_method: id,
      confirm: true, 
    });

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});