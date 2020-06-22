var mysqlConnection = require('./../../config');



module.exports.jupes = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE categorie = "Jupes"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
