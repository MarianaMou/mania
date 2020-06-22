var mysqlConnection = require('./../config');

module.exports.commentaire = function(req, res) {
  var num_reference = req.body.num_reference;
  console.log(num_reference)
    mysqlConnection.query('SELECT nom,prenom,commentaire,nb_etoile,DATE_FORMAT(date_avis,"%d-%m-%Y") as date FROM Avis INNER JOIN Client WHERE Avis.num_client=Client.id_client AND Avis.num_reference= ? ',[num_reference],
        (err, rows, results) => {
            if (!err) res.send(rows);
            else
                console.log(err);
        });

}
