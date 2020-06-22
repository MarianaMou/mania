var mysqlConnection = require('../../../../config');


module.exports.classique = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Pantalon classique"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
