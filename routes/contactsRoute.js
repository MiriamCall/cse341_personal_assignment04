const router = require("express").Router();
const contactsController = require("../controllers/contactsController");

//Get (Read)
router.get("/", contactsController.getContacts);
router.get("/:id", contactsController.getContactById);

//Post (Create)
router.post("/", contactsController.createContact);

//Put (Update)
router.put("/:id", contactsController.updateContact);

//Delete (Delete)
router.delete("/:id", contactsController.deleteContact);

module.exports = router;
