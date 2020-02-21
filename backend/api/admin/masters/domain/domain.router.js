const router = require("express").Router();
const { checkToken } = require("../../../../auth/token_validation");
const {
  addDomain,
  getDomainByDomainId,
  getDomain,
  updateDomain,
  deleteDomain
} = require("./domain.controller");
router.get("/", checkToken, getDomain);
router.post("/add", checkToken, addDomain);
router.get("/get/:id", checkToken, getDomainByDomainId);
router.post("/update/:id", checkToken, updateDomain);
router.post("/delete", checkToken, deleteDomain);

module.exports = router;
