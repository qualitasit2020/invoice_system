const {
  addModuleData,
  getModuleDataByModuleId,
  getModulesData,
  updateModuleData,
  deleteModuleData
} = require("./modules.service");



module.exports = {
  addModule: (req, res) => {
    const body = req.body;
    addModuleData(body, (err, results) => {
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
  getModuleByModuleId: (req, res) => {
    
    const id = req.params.id;
    getModuleDataByModuleId(id, (err, results) => {
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
  getModules: (req, res) => {
    getModulesData((err, results) => {
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
  updateModule: (req, res) => {
    const body = req.body;
     
    updateModuleData(body, (err, results) => {
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
  deleteModule: (req, res) => {

    const body = req.body;
    
    deleteModuleData(body, (err, results) => {
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
