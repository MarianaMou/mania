var mysqlConnection = require('./../config');

var idClient=0;

module.exports.panier = function(req, res) {
var email = req.body.email;
var num_reference = req.body.num_reference;
var nunum = String(num_reference);
var id_panier=-1;
var quantite_article=0;
var num_reference_panier='';

  mysqlConnection.query('SELECT id_client FROM Client WHERE email = ? ',[email],
      (err, rows, results) => {

        Object.keys(rows).forEach(function(key) {
          var row = rows[key];
          //idClient = row.id_client;
          SetIdClient(row.id_client);
      });

      });



      mysqlConnection.query('SELECT id_panier,quantite_article,num_reference FROM Panier WHERE num_reference= ? AND id_client = ? ',[num_reference,idClient],
      (err, rows, results) => {


        Object.keys(rows).forEach(function(key) {
          var row = rows[key];
          id_panier = row.id_panier;
          quantite_article = row.quantite_article;
          num_reference_panier=row.num_reference;



      });
     num_reference_panier.trim();
     nunum = nunum.trim();
     var match= nunum.localeCompare(num_reference_panier);



      if(num_reference_panier==nunum) {
        console.log(num_reference_panier);
        console.log("ici")
        quantite_article+=1;
        console.log(id_panier)
        mysqlConnection.query('UPDATE Panier SET quantite_article = ? WHERE id_panier = ? ',[quantite_article,id_panier],
        (err, rows, results) => {
console.log(rows)

        });
      }
      else if(num_reference_panier!=nunum){
        console.log("ici aussi")
        quantite_article=1;
        var sql = "INSERT INTO Panier(num_reference,id_client,quantite_article) VALUES (?)";
        var values = [num_reference,idClient,quantite_article];
        mysqlConnection.query(sql, [values], function(error, results) {

        })
      }

      });




}
function SetIdClient(id){
idClient=id;

}

