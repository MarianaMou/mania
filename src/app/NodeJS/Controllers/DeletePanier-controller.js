var mysqlConnection = require('./../config');

var idClient=0;
module.exports.PanierDelete = function(req, res) {

  var email = req.body.email;
  mysqlConnection.query('SELECT id_client FROM Client WHERE email = ? ',[email],
    (err, rows, result) => {
      Object.keys(rows).forEach(function(key) {
        var row = rows[key];
        SetIdClient(row.id_client);

    });

     })

     mysqlConnection.query('DELETE FROM Panier WHERE id_client = ?',[idClient],
    (err, rows, result) => {
      if (!err) {

        res.send({

            status: true,
            message: 'Panier vide',

        })

    } else {
        res.send({
            status: false,
            data: results,
            message: 'erreur'
        })
    }


     })

}
function SetIdClient(id){
  idClient=id;

  }
