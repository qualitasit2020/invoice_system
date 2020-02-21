const router = require("express").Router();
const { checkToken } = require("../../../../auth/token_validation");
const {
  addIndustry,
  getIndustryByIndustryId,
  getIndustry,
  updateIndustry,
  deleteIndustry
} = require("./industry.controller");
router.get("/", checkToken, getIndustry);
router.post("/add", checkToken, addIndustry);
router.get("/get/:id", checkToken, getIndustryByIndustryId);
router.post("/update/:id", checkToken, updateIndustry);
router.post("/delete", checkToken, deleteIndustry);

module.exports = router;
