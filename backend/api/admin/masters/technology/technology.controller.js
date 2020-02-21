const {
  addTechnologyData,
  getTechnologyDataByTechnologyId,
  getTechnologyData,
  updateTechnologyData,
  deleteTechnologyData
} = require("./technology.service");



module.exports = {
  addTechnology: (req, res) => {
    const body = req.body;
    addTechnologyData(body, (err, results) => {
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
  getTechnologyByTechnologyId: (req, res) => {
    
    const id = req.params.id;
    getTechnologyDataByTechnologyId(id, (err, results) => {
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
  getTechnology: (req, res) => {
    getTechnologyData((err, results) => {
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
  updateTechnology: (req, res) => {
    const body = req.body;
     
    updateTechnologyData(body, (err, results) => {
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
  deleteTechnology: (req, res) => {

    const body = req.body;
    
    deleteTechnologyData(body, (err, results) => {
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
