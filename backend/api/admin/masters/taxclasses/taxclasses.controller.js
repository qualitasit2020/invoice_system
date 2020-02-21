const {
  addTaxClassData,
  getTaxClassDataByTaxClassId,
  getTaxClassesData,
  updateTaxClassData,
  deleteTaxClassData
} = require("./taxclasses.service");



module.exports = {
  addTaxClass: (req, res) => {
    const body = req.body;
    addTaxClassData(body, (err, results) => {
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
  getTaxClassByTaxClassId: (req, res) => {
    
    const id = req.params.id;
    getTaxClassDataByTaxClassId(id, (err, results) => {
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
  getTaxClasses: (req, res) => {
    getTaxClassesData((err, results) => {
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
  updateTaxClass: (req, res) => {
    const body = req.body;
     
    updateTaxClassData(body, (err, results) => {
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
  deleteTaxClass: (req, res) => {

    const body = req.body;
    
    deleteTaxClassData(body, (err, results) => {
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
