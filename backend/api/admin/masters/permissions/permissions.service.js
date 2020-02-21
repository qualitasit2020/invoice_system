const sql = require("../../../../config/database");

module.exports = {
  addPermissionData: (data, callBack) => {
    sql.query(
      `insert into permissions_master(permission_name, status) 
                values(?,?)`,
      [
        data.permission_name,
        data.status
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPermissionDataByPermissionId: (permission_id, callBack) => {
    sql.query(
      `select * from permissions_master where permission_id = ?`,
      [permission_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getPermissionsData: callBack => {
   
    sql.query(
      `select * from permissions_master`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatePermissionData: (data, callBack) => {
    sql.query(
      `update permissions_master set permission_name=?, status=? where permission_id = ?`,
      [
        data.permission_name,
        data.status,
        data.permission_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deletePermissionData: (data, callBack) => {
    
    sql.query(
      `delete from permissions_master where permission_id = ?`,
      [data.permission_id],
      (error, results, fields) => {
        console.log("results: "+results);
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
