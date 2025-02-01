const router = require("express").Router();
const contactsRoute = require("./contactsRoute");

const swagger = require("./swaggerRoutes");

router.use("/contacts", contactsRoute);
router.use("/api-docs", swagger);

module.exports = router;
