var mysqlConnection = require('./../config');

module.exports.avis = function(req, res) {


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;


    var email = req.body.email;
    var num_reference = req.body.num_reference;
    var commentaire = req.body.commentaire;
    var nb_etoile = req.body.nb_etoile;
    var date_avis = today;
    console.log(req.body)
    var idCli = 0;
    mysqlConnection.query('SELECT id_client FROM Client WHERE email = ? ',[email],
    (err, rows, result) => {

      Object.keys(rows).forEach(function(key) {
        var row = rows[key];
        idCli = row.id_client;
console.log(idCli)

    });

    var sql = "INSERT INTO Avis(num_client,num_reference,commentaire,nb_etoile,date_avis) VALUES (?)";
    var values = [idCli, num_reference, commentaire, nb_etoile, date_avis];
    mysqlConnection.query(sql, [values], function(error, results) {
        if (error) {
            res.send({
                status: false,
                message: 'erreur dans la requête'

            })

        } else {
            res.send({
                status: true,
                data: results,
                message: 'Merci pour votre commentaire'
            })
        }
    })

  })

}
