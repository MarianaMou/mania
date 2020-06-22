var mysqlConnection = require('../../../../config');


module.exports.debardeurs = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Débardeur"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
