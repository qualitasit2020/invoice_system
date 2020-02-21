const sql = require("../../../../config/database");

module.exports = {
  addStateData: (data, callBack) => {
    sql.query(
      `insert into states_master(state_name, status) 
                values(?,?)`,
      [
        data.state_name,
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
  getStateDataByStateId: (state_id, callBack) => {
    sql.query(
      `select * from states_master where state_id = ?`,
      [state_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getStatesData: callBack => {
    
    sql.query(
      `select * from states_master`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateStateData: (data, callBack) => {
    sql.query(
      `update states_master set state_name=?, status=? where state_id = ?`,
      [
        data.state_name,
        data.status,
        data.state_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteStateData: (data, callBack) => {
    
    sql.query(
      `delete from states_master where state_id = ?`,
      [data.state_id],
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
