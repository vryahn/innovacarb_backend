const userRoutes = require("./userRoutes");
const coffeshop = require("./coffeshopRoutes");
const quotesRoutes = require("./quotesRoutes");

const apiRouter = (app) => {
  app.use("/users", userRoutes);
  app.use("/coffeshop", coffeshop);
  app.use("/quotes", quotesRoutes);
};

module.exports = apiRouter;
