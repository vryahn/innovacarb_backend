const routes = require("express").Router();
const { create, authenticate, addCoffeShop, getAllUsers, getOneUser } = require("../usecases/user");
const {authHandler}= require ("../middlewares/authHandler")

routes.post("/", async (req, res) => {
  const { email, password } = req.body; 
  console.log(req.body);//noo olvides borrar esto!!!!!!!!!

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
  console.log(req.body)
  const { id } = req.params;
  console.log(req.params)
  const { nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage } = req.body.coffeshop;
  
  try {
    const user = await addCoffeShop(id, nameCafeteria, ownerName, phone, adress, socialRed, postalCode, kgAverage);
    res.json({ ok: true, payload: user });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

routes.get("/", async (req, res)=>{
  try{
    const user = await getAllUsers();
    res.json({ok:true, payload: user});
  }catch(error){
    const {message} = error;
    res.status(400).json({ok:false, message: error})
  }
});

routes.get("/", async (req, res)=>{
  const { id } = req.params;
  try{
    const{email, coffeshop}=await getOneUser(id);
    res.json({ok: true, payload: {email, coffeshop}});
  }catch(error){
    res.status(400).json({ok: false, message: error})
  }
});

module.exports = routes;
