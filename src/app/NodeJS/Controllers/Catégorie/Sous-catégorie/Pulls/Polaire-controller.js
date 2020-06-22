var mysqlConnection = require('../../../../config');


module.exports.polaires = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Polaire"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
