var mysqlConnection = require('../../../../config');


module.exports.blouses = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Blouse"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
