const router = require("express").Router();
const { checkToken } = require("../../../../auth/token_validation");
const {
  addCity,
  getCityByCityId,
  getCities,
  updateCity,
  deleteCity
} = require("./cities.controller");
router.get("/", checkToken, getCities);
router.post("/add", checkToken, addCity);
router.get("/get/:id", checkToken, getCityByCityId);
router.post("/update/:id", checkToken, updateCity);
router.post("/delete", checkToken, deleteCity);

module.exports = router;
