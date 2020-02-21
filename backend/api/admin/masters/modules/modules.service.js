const sql = require("../../../../config/database");

module.exports = {
  addModuleData: (data, callBack) => {
    sql.query(
      `insert into modules_master(module_name, status) 
                values(?,?)`,
      [
        data.module_name,
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
  getModuleDataByModuleId: (module_id, callBack) => {
    sql.query(
      `select * from modules_master where module_id = ?`,
      [module_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getModulesData: callBack => {
   
    sql.query(
      `select * from modules_master`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateModuleData: (data, callBack) => {
    sql.query(
      `update modules_master set module_name=?, status=? where module_id = ?`,
      [
        data.module_name,
        data.status,
        data.module_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteModuleData: (data, callBack) => {
    
    sql.query(
      `delete from modules_master where module_id = ?`,
      [data.module_id],
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
