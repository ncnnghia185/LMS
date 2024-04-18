const router = require("express").Router();
const contactController = require("../controllers/contactController");
const { verifyAccesToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", verifyAccesToken, contactController.createNewContact);
router.get("/", verifyAccesToken, contactController.getAllContacts);
router.get("/:id", verifyAccesToken, contactController.getAContact);
router.put(
  "/update/:id",
  verifyAccesToken,
  isAdmin,
  contactController.updateContactStatus
);
router.delete(
  "/:id",
  verifyAccesToken,
  isAdmin,
  contactController.deleteContact
);

module.exports = router;
