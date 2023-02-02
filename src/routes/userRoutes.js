const routes = require("express").Router();
const { create } = require("../usecases/user");

routes.post("/", async (req, res) => {
  const { email, password } = req.body; //agregar firstname, lastName
  console.log(req.body);

  try {
    const payload = await create(email, password);
    res.json({ ok: true, message: "Usuario creado :)", payload });
  } catch (error) {
    const { message } = error;
    res.status(500).json({ ok: false, message });//500 error de servidor
  }
});

module.exports=routes;