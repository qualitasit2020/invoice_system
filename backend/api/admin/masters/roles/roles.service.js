const sql = require("../../../../config/database");

module.exports = {
  addRoleData: (data, callBack) => {
    sql.query(
      `insert into roles_master(role_name, status) 
                values(?,?)`,
      [
        data.role_name,
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
  getRoleDataByRoleId: (role_id, callBack) => {
    sql.query(
      `select * from roles_master where role_id = ?`,
      [role_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getRolesData: callBack => {
   
    sql.query(
      `select * from roles_master`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateRoleData: (data, callBack) => {
    sql.query(
      `update roles_master set role_name=?, status=? where role_id = ?`,
      [
        data.role_name,
        data.status,
        data.role_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteRoleData: (data, callBack) => {
    
    sql.query(
      `delete from roles_master where role_id = ?`,
      [data.role_id],
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
