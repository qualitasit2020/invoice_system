const {
  addStateData,
  getStateDataByStateId,
  getStatesData,
  updateStateData,
  deleteStateData
} = require("./states.service");



module.exports = {
  addState: (req, res) => {
    const body = req.body;
    addStateData(body, (err, results) => {
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
  getStateByStateId: (req, res) => {
    
    const id = req.params.id;
    getStateDataByStateId(id, (err, results) => {
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
  getStates: (req, res) => {
    getStatesData((err, results) => {
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
  updateState: (req, res) => {
    const body = req.body;
     
    updateStateData(body, (err, results) => {
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
  deleteState: (req, res) => {

    const body = req.body;
    
    deleteStateData(body, (err, results) => {
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
