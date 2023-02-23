const userRoutes = require("./userRoutes");
const coffeshopRoutes = require("./coffeshopRoutes");
const quotesRoutes = require("./quotesRoutes");

const apiRouter = (app) => {
  app.use("/users", userRoutes);
  app.use("/coffeshop", coffeshopRoutes);
  app.use("/quotes", quotesRoutes);
};

module.exports = apiRouter;
