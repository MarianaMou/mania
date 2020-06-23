var mysqlConnection = require('./../config');
var login = require('./login-controller');


module.exports.infocommande = function(req, res) {
  var email = req.body.Email;

  mysqlConnection.query('SELECT DISTINCT Commande.num_commande,quantite_article,Detailcommande.num_référence as num_reference,nom_article,prix,Image,DATE_FORMAT(date_commande,"%d-%m-%Y") as date FROM Client JOIN Commande ON email= ? AND Client.id_client= Commande.id_client JOIN Detailcommande ON Commande.num_commande=Detailcommande.num_commande JOIN Article ON Article.num_reference=Detailcommande.num_référence',[email],
      (err, rows, results) => {
          if (!err) res.send(rows);
          else
              console.log(err);
      });
}
