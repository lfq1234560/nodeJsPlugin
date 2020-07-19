const mysql = require("mysql");
let pool = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "xfc",
  multipleStatements: true,
});
let query = function (sql) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
module.exports = query;
