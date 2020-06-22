var mysqlConnection = require('./../../config');



module.exports.robes = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE categorie = "Robes"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
