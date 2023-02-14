const routes = require("express").Router();
const { create, authenticate } = require("../usecases/user");

routes.post("/", async (req, res) => {
  const { email, password } = req.body; //agregar firstname, lastName
  console.log(req.body);

  try {
    const payload = await create(email, password);
    res.json({ ok: true, message: "Usuario creado :)", payload });
  } catch (error) {
    const { message } = error;
    res.status(500).json({ ok: false, message }); //500 error de servidor
  }
});

routes.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  try {
    const payload = await authenticate(email, password);
    res.status(202).json({ ok: true, payload });
  } catch (error) {
    const { message } = error;
    res.status(401).json({ ok: false, message });
  }
});

routes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { userName, password } = req.body;

  try {
    const data = { userName, password };
    const user = await update(id, password, userName);
    res.json({ ok: true, payload: user });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

module.exports = routes;