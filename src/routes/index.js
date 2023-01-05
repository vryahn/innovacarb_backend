const userRoutes=require("./userRoutes");

const apiRouter=(app)=>{
    app.use("/users",userRoutes);
};

module.exports=apiRouter;