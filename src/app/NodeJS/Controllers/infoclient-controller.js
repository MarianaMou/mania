var mysqlConnection = require('./../config');



module.exports.infoclient = function(req, res) {
var email = req.body.Email;

  mysqlConnection.query('SELECT nom,prenom,num_tel,email,rue,num_rue,ville,code_postal,Coordonne_bancaire FROM Client INNER JOIN Adresse WHERE email = ? AND Client.id_adresse=Adresse.id_adresse',[email],
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
//SELECT num_commande,date_commande,type_paiement FROM Client INNER JOIN Commande WHERE email ='Gerard.Martzz@yahoo.com' AND Client.id_client=Commande.id_client
//
//SELECT DISTINCT Commande.num_commande,date_commande,type_paiement,quantite_article,Detailcommande.num_référence,nom_article,prix,Image FROM Client JOIN Commande ON email="SlimaniKenza@yahoo.com" AND Client.id_client= Commande.id_client JOIN Detailcommande ON Commande.num_commande=Detailcommande.num_commande JOIN Article ON Article.num_reference=Detailcommande.num_référence
