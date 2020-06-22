var mysqlConnection = require('../../../../config');


module.exports.plissées = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Jupe plissée"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
