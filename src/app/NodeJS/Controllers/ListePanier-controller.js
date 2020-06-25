var mysqlConnection = require('./../config');

var idClient=0;
var prix = 0
module.exports.liste = function(req, res) {

  var email = req.body.email;



  mysqlConnection.query('SELECT id_client FROM Client WHERE email = ? ',[email],
    (err, rows, result) => {
      Object.keys(rows).forEach(function(key) {
        var row = rows[key];
        //idClient = row.id_client;
        SetIdClient(row.id_client);

    });

     })


     mysqlConnection.query('SELECT Panier.num_reference,Panier.quantite_article, nom_article, prix,couleur,categorie,sous_categorie,Image FROM Panier INNER JOIN Article WHERE Panier.num_reference=Article.num_reference AND id_client = ?',[idClient],
    (err, rows, result) => {
     

      if (!err) res.send(rows);
      else
          console.log(err);

     })

//SELECT nom,prenom,commentaire,nb_etoile,DATE_FORMAT(date_avis,"%d-%m-%Y") as date FROM Avis INNER JOIN Client WHERE Avis.num_client=Client.id_client AND Avis.num_reference= ?

}
function SetIdClient(id){
  idClient=id;

  }
