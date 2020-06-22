var mysqlConnection = require('../../../../config');


module.exports.short = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Short"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
