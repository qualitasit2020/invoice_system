const {
  addCountryData,
  getCountryDataByCountryId,
  getCountriesData,
  updateCountryData,
  deleteCountryData
} = require("./countries.service");



module.exports = {
  addCountry: (req, res) => {
    const body = req.body;
    addCountryData(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  getCountryByCountryId: (req, res) => {
    
    const id = req.params.id;
    getCountryDataByCountryId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getCountries: (req, res) => {
    getCountriesData((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  updateCountry: (req, res) => {
    const body = req.body;
     
    updateCountryData(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  },
  deleteCountry: (req, res) => {

    const body = req.body;
    
    deleteCountryData(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "deleted successfully"
      });
    });
  }
};
