var mysqlConnection = require('./../config');

module.exports.commentaire = function(req, res) {

    mysqlConnection.query('SELECT nom,prenom,commentaire,nb_etoile,DATE_FORMAT(date_avis,"%d-%m-%Y") as date FROM Avis INNER JOIN Client WHERE Avis.num_client=Client.id_client AND Avis.num_reference="CLK21C01J-G11"',
        (err, rows, results) => {
            if (!err) res.send(rows);
            else
                console.log(err);
        });

}
