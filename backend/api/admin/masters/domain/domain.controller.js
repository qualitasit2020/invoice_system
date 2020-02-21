const {
  addDomainData,
  getDomainDataByDomainId,
  getDomainData,
  updateDomainData,
  deleteDomainData
} = require("./domain.service");



module.exports = {
  addDomain: (req, res) => {
    const body = req.body;
    addDomainData(body, (err, results) => {
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
  getDomainByDomainId: (req, res) => {
    
    const id = req.params.id;
    getDomainDataByDomainId(id, (err, results) => {
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
  getDomain: (req, res) => {
    getDomainData((err, results) => {
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
  updateDomain: (req, res) => {
    const body = req.body;
     
    updateDomainData(body, (err, results) => {
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
  deleteDomain: (req, res) => {

    const body = req.body;
    
    deleteDomainData(body, (err, results) => {
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
