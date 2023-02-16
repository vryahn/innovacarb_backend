const routes = require ("express").Router();
const { create } = require("../usecases/coffeShop");

routes.post("/", async (req, res) => {
    const { nameCafeteria, ownweName, phone, adress, socialRed, postalCode, kgAverage } = req.body; 
  
    try {
      const payload = await create(nameCafeteria, ownweName, phone, adress, socialRed, postalCode, kgAverage);
      res.json({ ok: true, message: "cafeteria agregada:)", payload });
    } catch (error) {
      const { message } = error;
      res.status(500).json({ ok: false, message }); 
    }
  });

  module.exports = routes;