const router = require("express").Router();
const { checkToken } = require("../../../../auth/token_validation");
const {
  addTechnology,
  getTechnologyByTechnologyId,
  getTechnology,
  updateTechnology,
  deleteTechnology
} = require("./technology.controller");
router.get("/", checkToken, getTechnology);
router.post("/add", checkToken, addTechnology);
router.get("/get/:id", checkToken, getTechnologyByTechnologyId);
router.post("/update/:id", checkToken, updateTechnology);
router.post("/delete", checkToken, deleteTechnology);

module.exports = router;
