const sql = require("../../../../config/database");

module.exports = {
  addTaxClassData: (data, callBack) => {
    sql.query(
      `insert into taxclasses_master(taxclass_name,cgst_rate,sgst_rate,igst_rate,tds_rate,status) values(?,?,?,?,?,?)`,
                
      [
        data.taxclass_name,
        data.cgst_rate,
        data.sgst_rate,
        data.igst_rate,
        data.tds_rate,
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
  getTaxClassDataByTaxClassId: (taxclass_id, callBack) => {
    sql.query(
      `select * from taxclasses_master where taxclass_id = ?`,
      [taxclass_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getTaxClassesData: callBack => {
   
    sql.query(
      `select * from taxclasses_master`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateTaxClassData: (data, callBack) => {
    sql.query(
      `update taxclasses_master set 
       taxclass_name=?,
       cgst_rate=?,
       sgst_rate=?,
       igst_rate=?,
       tds_rate=?,
       status=? 
       where taxclass_id = ?`,
      [
        data.taxclass_name,
        data.cgst_rate,
        data.sgst_rate,
        data.igst_rate,
        data.tds_rate,
        data.status,
        data.taxclass_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteTaxClassData: (data, callBack) => {
    
    sql.query(
      `delete from taxclasses_master where taxclass_id = ?`,
      [data.taxclass_id],
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
