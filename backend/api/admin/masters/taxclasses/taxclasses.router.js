const router = require("express").Router();
const { checkToken } = require("../../../../auth/token_validation");
const {
  addTaxClass,
  getTaxClassByTaxClassId,
  getTaxClasses,
  updateTaxClass,
  deleteTaxClass
} = require("./taxclasses.controller");
router.get("/", checkToken, getTaxClasses);
router.post("/add", checkToken, addTaxClass);
router.get("/get/:id", checkToken, getTaxClassByTaxClassId);
router.post("/update/:id", checkToken, updateTaxClass);
router.post("/delete", checkToken, deleteTaxClass);

module.exports = router;
