const express = require("express");
const dotenv = require("dotenv");
const swaggerConfig = require("./src/config/swagger.config");
const mainRouter = require("./src/app.routes");
const NotFoundHandler = require("./src/common/exeption/not-found.hanlder");
const AllexectionHandler = require("./src/common/exeption/all-exection.handler");
dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT;

  require("./src/config/mongodb.config");
  app.use(express.json())
  app.use(express.urlencoded({extended:true}))
  swaggerConfig(app);
  app.use(mainRouter);
  NotFoundHandler(app)
  AllexectionHandler(app)
  app.listen(3000, () => {
    console.log(`server:http://localhost:${port}`);
  });
}

main();
