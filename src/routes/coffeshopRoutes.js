const routes = require("express").Router();
const { authHandler } = require("../middlewares/authHandler");
const {coffeShopeHandler} = require ("../middlewares/coffeShopHandler")
const { create, getAll, getById, update, del } = require("../usecases/coffeShop");

routes.post("/", async (req, res) => {
  const { nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage } = req.body;

  try {
    const payload = await create( nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage );
    res.json({ ok: true, message: "cafeteria agregada:)", payload });
  } catch (error) {
    const { message } = error;
    res.status(500).json({ ok: false, message });
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

routes.put("/:id",  async (req, res) => {
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
    res.status(400).json({ ok: false, message });
  }
});

module.exports = routes;
