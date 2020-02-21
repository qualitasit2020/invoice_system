const router = require("express").Router();
const { checkToken } = require("../../../../auth/token_validation");
const {
  addState,
  getStateByStateId,
  getStates,
  updateState,
  deleteState
} = require("./states.controller");
router.get("/", checkToken, getStates);
router.post("/add", checkToken, addState);
router.get("/get/:id", checkToken, getStateByStateId);
router.post("/update/:id", checkToken, updateState);
router.post("/delete", checkToken, deleteState);

module.exports = router;
