const userRoutes = require("./userRoutes");
const coffeshop = require("./coffeshopRoutes");
const schedulesRoutes = require("./schedulesRoutes");

const apiRouter = (app) => {
  app.use("/users", userRoutes);
  app.use("/coffeshop", coffeshop);
  app.use("/schedules", schedulesRoutes);
};

module.exports = apiRouter;
