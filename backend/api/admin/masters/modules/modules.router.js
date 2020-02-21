const router = require("express").Router();
const { checkToken } = require("../../../../auth/token_validation");
const {
  addModule,
  getModuleByModuleId,
  getModules,
  updateModule,
  deleteModule
} = require("./modules.controller");
router.get("/", checkToken, getModules);
router.post("/add", checkToken, addModule);
router.get("/get/:id", checkToken, getModuleByModuleId);
router.post("/update/:id", checkToken, updateModule);
router.post("/delete", checkToken, deleteModule);

module.exports = router;
