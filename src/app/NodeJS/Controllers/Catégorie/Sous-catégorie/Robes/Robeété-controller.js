var mysqlConnection = require('../../../../config');


module.exports.été = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Robe d\'été"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
