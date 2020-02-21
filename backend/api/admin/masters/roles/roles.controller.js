const {
  addRoleData,
  getRoleDataByRoleId,
  getRolesData,
  updateRoleData,
  deleteRoleData
} = require("./roles.service");



module.exports = {
  addRole: (req, res) => {
    const body = req.body;
    addRoleData(body, (err, results) => {
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
  getRoleByRoleId: (req, res) => {
    
    const id = req.params.id;
    getRoleDataByRoleId(id, (err, results) => {
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
  getRoles: (req, res) => {
    getRolesData((err, results) => {
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
  updateRole: (req, res) => {
    const body = req.body;
     
    updateRoleData(body, (err, results) => {
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
  deleteRole: (req, res) => {

    const body = req.body;
    
    deleteRoleData(body, (err, results) => {
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
