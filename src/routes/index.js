const userRoutes = require("./userRoutes");
const coffeshop = require("./coffeshopRoutes");



const apiRouter = (app) => {
  app.use("/users", userRoutes);
  app.use("/coffeshop", coffeshop);
};

module.exports = apiRouter;
