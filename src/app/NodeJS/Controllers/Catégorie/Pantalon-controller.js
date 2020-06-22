var mysqlConnection = require('./../../config');



module.exports.pantalons = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE categorie = "Pantalons"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
