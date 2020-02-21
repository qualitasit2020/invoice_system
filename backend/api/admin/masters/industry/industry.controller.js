const {
  addIndustryData,
  getIndustryDataByIndustryId,
  getIndustryData,
  updateIndustryData,
  deleteIndustryData
} = require("./industry.service");



module.exports = {
  addIndustry: (req, res) => {
    const body = req.body;
    addIndustryData(body, (err, results) => {
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
  getIndustryByIndustryId: (req, res) => {
    
    const id = req.params.id;
    getIndustryDataByIndustryId(id, (err, results) => {
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
  getIndustry: (req, res) => {
    getIndustryData((err, results) => {
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
  updateIndustry: (req, res) => {
    const body = req.body;
     
    updateIndustryData(body, (err, results) => {
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
  deleteIndustry: (req, res) => {

    const body = req.body;
    
    deleteIndustryData(body, (err, results) => {
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
