var mysqlConnection = require('./../config');

module.exports.avis = function(req, res) {


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;


    var num_client = req.body.num_client;
    var num_reference = req.body.num_reference;
    var commentaire = req.body.commentaire;
    var nb_etoile = req.body.nb_etoile;
    var date_avis = today;

    var sql = "INSERT INTO Avis(num_client,num_reference,commentaire,nb_etoile,date_avis) VALUES (?)";
    var values = [num_client, num_reference, commentaire, nb_etoile, date_avis];
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



}
