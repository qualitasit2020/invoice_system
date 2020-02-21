const sql = require("../../../../config/database");

module.exports = {
  addDomainData: (data, callBack) => {
    sql.query(
      `insert into project_domain(project_domain_name, status) 
                values(?, ?)`,
      [
        data.project_domain_name,
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
  getDomainDataByDomainId: (project_domain_id, callBack) => {
    sql.query(
      `select * from project_domain where project_domain_id = ?`,
      [project_domain_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getDomainData: callBack => {
    
    sql.query(
      `select * from project_domain`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateDomainData: (data, callBack) => {
    sql.query(
      `update project_domain set project_domain_name=?, status=? where project_domain_id = ?`,
      [
        data.project_domain_name,
        data.status,
        data.project_domain_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteDomainData: (data, callBack) => {
    
    sql.query(
      `delete from project_domain where project_domain_id = ?`,
      [data.project_domain_id],
      (error, results, fields) => {
        //console.log("results: "+results);
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
