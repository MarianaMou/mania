var mysqlConnection = require('../../../../config');


module.exports.legere = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Veste légère"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
