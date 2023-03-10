const routes = require("express").Router();
const { authHandler } = require("../middlewares/authHandler");
const { coffeShopeHandler } = require("../middlewares/coffeShopHandler");
const { getAll, getById, update, del } = require("../usecases/coffeShop");
const { addCoffeShop } = require("../usecases/user");

routes.post("/", authHandler, async (req, res) => {
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

routes.get("/", async (req, res) => {
  try {
    const payload = await getAll();
    res.json({ ok: true, payload });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

routes.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const payload = await getById(id);
    res.json({ ok: true, payload });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

routes.put("/:id", async (req, res) => {
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

routes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coffeshopdeleted = await del(id);
    res.json({ ok: true, payload: coffeshopdeleted });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message: error });
  }
});

module.exports = routes;
