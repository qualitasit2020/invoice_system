const router = require("express").Router();
const { checkToken } = require("../../../../auth/token_validation");
const {
  addRole,
  getRoleByRoleId,
  getRoles,
  updateRole,
  deleteRole
} = require("./roles.controller");
router.get("/", checkToken, getRoles);
router.post("/add", checkToken, addRole);
router.get("/get/:id", checkToken, getRoleByRoleId);
router.post("/update/:id", checkToken, updateRole);
router.post("/delete", checkToken, deleteRole);

module.exports = router;
