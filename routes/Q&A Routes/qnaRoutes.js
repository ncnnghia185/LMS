const router = require("express").Router();
const qnaController = require("../../controllers/question&answer/qnaController");
const { verifyAccesToken, isAdmin } = require("../../middlewares/verifyToken");
const qnaTagController = require("../../controllers/question&answer/qnaTagController");
router.post("/ask", verifyAccesToken, qnaController.postQuestion);
router.get("/ask/:slug", verifyAccesToken, qnaController.getAQuestion);
router.get("/", verifyAccesToken, qnaController.getAllQuestions);
router.put("/update/:id", verifyAccesToken, qnaController.updateAQuestion);
router.delete(
  "/ask/:qaid/:qid/:aid",
  verifyAccesToken,
  isAdmin,
  qnaController.deleteAQuestion
);

router.post("/answer/:qaid", verifyAccesToken, qnaController.postAnswer);
router.put("/answer/update/:aid", verifyAccesToken, qnaController.updateAnswer);

router.post(
  "/tag/:qid",
  verifyAccesToken,
  isAdmin,
  qnaTagController.createTagQuestion
);
router.put(
  "/tag/update/:tid",
  verifyAccesToken,
  isAdmin,
  qnaTagController.updateTagQuestion
);
router.get("/tag/:slug", verifyAccesToken, qnaTagController.getATagQuestion);
router.get("/tag", verifyAccesToken, qnaTagController.getAllTagQuestion);
router.delete(
  "/tag/:qid/:tid",
  verifyAccesToken,
  isAdmin,
  qnaTagController.deleteTagQuestion
);
module.exports = router;
