const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

if (process.env.NODE_ENV === "development") {
  swaggerDocuments.host = "localhost:8080";
  swaggerDocuments.schemes = ["http"];
}

// Swagger UI Route
router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerDocument));

module.exports = router;
