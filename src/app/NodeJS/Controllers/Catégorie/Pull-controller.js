var mysqlConnection = require('./../../config');



module.exports.pulls = function(req, res) {


  mysqlConnection.query('SELECT * FROM Article WHERE categorie = "Pulls"',
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
