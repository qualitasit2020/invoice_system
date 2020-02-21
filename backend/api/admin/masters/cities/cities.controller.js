const {
  addCityData,
  getCityDataByCityId,
  getCitiesData,
  updateCityData,
  deleteCityData
} = require("./cities.service");



module.exports = {
  addCity: (req, res) => {
    const body = req.body;
    addCityData(body, (err, results) => {
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
  getCityByCityId: (req, res) => {
    
    const id = req.params.id;
    getCityDataByCityId(id, (err, results) => {
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
  getCities: (req, res) => {
    getCitiesData((err, results) => {
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
  updateCity: (req, res) => {
    const body = req.body;
     
    updateCityData(body, (err, results) => {
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
  deleteCity: (req, res) => {

    const body = req.body;
    
    deleteCityData(body, (err, results) => {
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
