const routes = require("express").Router();
const { create, update, authenticate } = require("../usecases/user");

routes.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const payload = await create(email, password);
    res.json({ ok: true, message: "Usuario creado :)", payload });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});
