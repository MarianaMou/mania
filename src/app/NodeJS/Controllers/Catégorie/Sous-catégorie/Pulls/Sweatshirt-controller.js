var mysqlConnection = require('../../../../config');



module.exports.sweatshirts = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE sous_categorie = "Sweatshirt"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
