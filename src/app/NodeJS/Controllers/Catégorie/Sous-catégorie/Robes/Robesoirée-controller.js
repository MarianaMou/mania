var mysqlConnection = require('../../../../config');


module.exports.soirées = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Robe de soirée"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
