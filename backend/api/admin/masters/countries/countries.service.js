const sql = require("../../../../config/database");

module.exports = {
  addCountryData: (data, callBack) => {
    sql.query(
      `insert into countries_master(country_name, status) 
                values(?,?)`,
      [
        data.country_name,
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
  getCountryDataByCountryId: (country_id, callBack) => {
    sql.query(
      `select * from countries_master where country_id = ?`,
      [country_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getCountriesData: callBack => {
    
    sql.query(
      `select * from countries_master`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateCountryData: (data, callBack) => {
    sql.query(
      `update countries_master set country_name=?, status=? where country_id = ?`,
      [
        data.country_name,
        data.status,
        data.country_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteCountryData: (data, callBack) => {
    
    sql.query(
      `delete from countries_master where country_id = ?`,
      [data.country_id],
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
