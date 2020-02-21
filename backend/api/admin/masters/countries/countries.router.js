const router = require("express").Router();
const { checkToken } = require("../../../../auth/token_validation");
const {
  addCountry,
  getCountryByCountryId,
  getCountries,
  updateCountry,
  deleteCountry
} = require("./countries.controller");
router.get("/", checkToken, getCountries);
router.post("/add", checkToken, addCountry);
router.get("/get/:id", checkToken, getCountryByCountryId);
router.post("/update/:id", checkToken, updateCountry);
router.post("/delete", checkToken, deleteCountry);

module.exports = router;
