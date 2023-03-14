const routes = require("express").Router();
const { getAll, getById, update, del } = require("../usecases/coffeShop");
const { addCoffeShop } = require("../usecases/user");

const { authHandler } = require("../middlewares/authHandler");
const { adminHandler } = require("../middlewares/adminHandler");
const { collectorHandler } = require("../middlewares/collectorHandler");
const { coffeShopeHandler  } = require("../middlewares/coffeShopHandler")


routes.post("/", [ authHandler ], async (req, res) => {
  const { sub } = req.params.token;
  const { nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage } = req.body;

  try {
    const user = await addCoffeShop( sub, nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage );
    res.json({ ok: true, payload: user });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

routes.get("/", [ authHandler, adminHandler, collectorHandler ], async (req, res) => {
  try {
    const payload = await getAll();
    res.json({ ok: true, payload });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

routes.get("/:id", [ authHandler, coffeShopeHandler, collectorHandler, adminHandler ],async (req, res) => {
  const { id } = req.params;
  try {
    const payload = await getById(id);
    res.json({ ok: true, payload });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

routes.put("/:id", [authHandler], async (req, res) => {
  const { id } = req.params;
  const { nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage } = req.body;
  try {
    const payload = await update( id, nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage );
    res.json({ ok: true, payload });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

routes.delete("/:id", [ authHandler ],async (req, res) => {
  const { id } = req.params;
  
  try {
    const coffeshopdeleted = await del(id);
    res.json({ ok: true, payload: coffeshopdeleted });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message: error });
  }
});

module.exports = routes;
