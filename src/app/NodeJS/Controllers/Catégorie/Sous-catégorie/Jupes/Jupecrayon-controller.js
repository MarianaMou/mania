var mysqlConnection = require('../../../../config');


module.exports.crayons = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Jupe crayon"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
