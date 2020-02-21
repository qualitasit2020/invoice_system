const sql = require("../../../../config/database");

module.exports = {
  addCityData: (data, callBack) => {
    sql.query(
      `insert into cities_master(city_name, status) 
                values(?,?)`,
      [
        data.city_name,
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
  getCityDataByCityId: (city_id, callBack) => {
    sql.query(
      `select * from cities_master where city_id = ?`,
      [city_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getCitiesData: callBack => {
   
    sql.query(
      `select * from cities_master`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateCityData: (data, callBack) => {
    sql.query(
      `update cities_master set city_name=?, status=? where city_id = ?`,
      [
        data.city_name,
        data.status,
        data.city_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteCityData: (data, callBack) => {
    
    sql.query(
      `delete from cities_master where city_id = ?`,
      [data.city_id],
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
