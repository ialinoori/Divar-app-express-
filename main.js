const express = require("express");
const dotenv = require("dotenv");
const swaggerConfig = require("./src/config/swagger.config");
dotenv.config();

async function main() {
  const app = express();
  const port =process.env.PORT

  require("./src/config/mongodb.config")
swaggerConfig(app)
  app.listen(3000, () => {
    console.log(`server:http://localhost:${port}`);
  });
}

main();
