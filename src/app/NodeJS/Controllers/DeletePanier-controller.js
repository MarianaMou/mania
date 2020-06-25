var mysqlConnection = require('./../config');

var idClient=0;
module.exports.PanierDelete = function(req, res) {

  var email = req.body.email;

console.log(email)

  mysqlConnection.query('SELECT id_client FROM Client WHERE email = ? ',[email],
    (err, rows, result) => {
      Object.keys(rows).forEach(function(key) {
        var row = rows[key];
        //idClient = row.id_client;
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

//SELECT nom,prenom,commentaire,nb_etoile,DATE_FORMAT(date_avis,"%d-%m-%Y") as date FROM Avis INNER JOIN Client WHERE Avis.num_client=Client.id_client AND Avis.num_reference= ?

}
function SetIdClient(id){
  idClient=id;

  }
