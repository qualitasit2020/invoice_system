const router = require("express").Router();
const { checkToken } = require("../../../../auth/token_validation");
const {
  addPermission,
  getPermissionByPermissionId,
  getPermissions,
  updatePermission,
  deletePermission
} = require("./permissions.controller");
router.get("/", checkToken, getPermissions);
router.post("/add", checkToken, addPermission);
router.get("/get/:id", checkToken, getPermissionByPermissionId);
router.post("/update/:id", checkToken, updatePermission);
router.post("/delete", checkToken, deletePermission);

module.exports = router;
