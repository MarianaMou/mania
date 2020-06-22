var mysqlConnection = require('../../../../config');


module.exports.hiver = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Veste d\'hiver"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
