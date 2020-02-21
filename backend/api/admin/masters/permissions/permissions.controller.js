const {
  addPermissionData,
  getPermissionDataByPermissionId,
  getPermissionsData,
  updatePermissionData,
  deletePermissionData
} = require("./permissions.service");



module.exports = {
  addPermission: (req, res) => {
    const body = req.body;
    addPermissionData(body, (err, results) => {
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
  getPermissionByPermissionId: (req, res) => {
    
    const id = req.params.id;
    getPermissionDataByPermissionId(id, (err, results) => {
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
  getPermissions: (req, res) => {
    getPermissionsData((err, results) => {
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
  updatePermission: (req, res) => {
    const body = req.body;
     
    updatePermissionData(body, (err, results) => {
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
  deletePermission: (req, res) => {

    const body = req.body;
    
    deletePermissionData(body, (err, results) => {
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
