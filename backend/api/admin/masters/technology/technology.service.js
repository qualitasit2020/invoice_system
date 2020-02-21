const sql = require("../../../../config/database");

module.exports = {
  addTechnologyData: (data, callBack) => {
    sql.query(
      `insert into technology_master(technology_name, status) 
                values(?, ?)`,
      [
        data.technology_name,
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
  getTechnologyDataByTechnologyId: (technology_id, callBack) => {
    sql.query(
      `select * from technology_master where technology_id = ?`,
      [technology_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getTechnologyData: callBack => {
    console.log("cb");
    sql.query(
      `select * from technology_master`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateTechnologyData: (data, callBack) => {
    sql.query(
      `update technology_master set technology_name=?, status=? where technology_id = ?`,
      [
        data.technology_name,
        data.status,
        data.technology_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteTechnologyData: (data, callBack) => {
    
    sql.query(
      `delete from technology_master where technology_id = ?`,
      [data.technology_id],
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
