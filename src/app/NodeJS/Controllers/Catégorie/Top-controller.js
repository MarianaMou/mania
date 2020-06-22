var mysqlConnection = require('./../../config');



module.exports.tops = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE categorie = "Tops"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
