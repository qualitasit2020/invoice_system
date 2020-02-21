const sql = require("../../../../config/database");

module.exports = {
  addIndustryData: (data, callBack) => {
    sql.query(
      `insert into industry_master(industry_name, status) 
                values(?, ?)`,
      [
        data.industry_name,
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
  getIndustryDataByIndustryId: (industry_id, callBack) => {
    sql.query(
      `select * from industry_master where industry_id = ?`,
      [industry_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getIndustryData: callBack => {
    
    sql.query(
      `select * from industry_master`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateIndustryData: (data, callBack) => {
    sql.query(
      `update industry_master set industry_name=?, status=? where industry_id = ?`,
      [
        data.industry_name,
        data.status,
        data.industry_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteIndustryData: (data, callBack) => {
    
    sql.query(
      `delete from industry_master where industry_id = ?`,
      [data.industry_id],
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
