const routes = require("express").Router();
const {create, updateQuote, getAllQuotes} = require ("../usecases/quotes");

routes.post("/", async (req,res)=>{
    const {dateQuote, statusQuote} = req.body;

    try {
        const payload = await create (dateQuote, statusQuote);
        res.json({ok: true, message: "Cita creada!", payload})
    } catch (error){
        const {message } = error;
        res.status(500).json({ok: false, message})
    }
});

routes.pute("/:id", async (req, res)=>{

    const {id} = req.params;
    const {dateQuote} = req.body;

    try{
        const date= await updateQuote(id, dateQuote);
        res.json({ok: true, payload: date});
    }catch(error){
        const {message}= error;
        res.status(400).json({ok: false, message})
    }
});

routes.get("/",async (req, res)=>{
    try{
        const date = await getAllQuotes();
    }catch(error){
        const {message}= error;
        res.status(400).json({ok: false, message: error});
    }
})

