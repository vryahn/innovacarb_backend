const routes = require("express").Router();
const { authHandler } = require("../middlewares/authHandler");
const { coffeShopeHandler } = require("../middlewares/coffeShopHandler");
const { create, updateSchedules, getAllSchedules, getOneSchedules, delSchedules } = require("../usecases/schedules");

routes.post("/", async (req, res) => {
  const { dateSchedules, statusSchedules, coffeshop } = req.body;

  try {
    const payload = await create(dateSchedules, statusSchedules, coffeshop);
    res.json({ ok: true, message: "Cita creada!", payload });
  } catch (error) {
    const { message } = error;
    res.status(500).json({ ok: false, message });
  }
});

routes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { dateSchedules } = req.body;

  try {
    const date = await updateSchedules(id, dateSchedules);
    res.json({ ok: true, payload: date });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

routes.get("/", async (req, res) => {
  try {
    const date = await getAllSchedules();
    res.json({ ok: true, message: date });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message: error });
  }
});

routes.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id: ", id);

  try {
    const payload = await getOneSchedules(id);
    res.json({ ok: true, payload });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

routes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const date = await delSchedules(id);
    res.json({ ok: true, payload: date });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message: error });
  }
});

module.exports = routes;
