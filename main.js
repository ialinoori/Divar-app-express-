const express = require("express");
const dotenv = require("dotenv");
const swaggerConfig = require("./src/config/swagger.config");
const mainRouter = require("./src/app.routes");
const NotFoundHandler = require("./src/common/exeption/not-found.hanlder");
const AllexectionHandler = require("./src/common/exeption/all-exection.handler");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT;

  const corsOptions = {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    credentials: true,
  };
  app.use(cors(corsOptions));

  require("./src/config/mongodb.config");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
  swaggerConfig(app);
  app.use(mainRouter);
  NotFoundHandler(app);
  // AllexectionHandler(app)
  app.listen(3000, () => {
    console.log(`server:http://localhost:${port}`);
  });
}

main();
