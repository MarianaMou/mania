var mysqlConnection = require('./../../config');



module.exports.vestes = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE categorie = "Vestes"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
