var mysqlConnection = require('./../config');

var idClient=0;
var num_ref = "";
var quantite = 0;
var vrai_num_commande ="";
module.exports.payer=function(req,res){
const value= Math.floor(10000000000000 + Math.random() * 90000000000000);

var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;


var email = req.body.email;
var num_commande=value;
var date = today;




  mysqlConnection.query('SELECT id_client FROM Client WHERE email = ? ',[email],
    (err, rows, result) => {
      Object.keys(rows).forEach(function(key) {
        var row = rows[key];
        SetIdClient(row.id_client);

    });

      mysqlConnection.beginTransaction(function(err) {

        if (err) { throw err; }
        var sql2 = "INSERT INTO Commande(num_commande,id_client,date_commande) VALUES (?)"
        var values2 = [num_commande,idClient,date];
        console.log(num_commande)
        mysqlConnection.query(sql2, [values2], function(err, result) {
          if (err) {
            mysqlConnection.rollback(function() {
              throw err;
            });
          }

      var articlePanier = "SELECT num_reference,quantite_article FROM Panier WHERE id_client = ?"
      mysqlConnection.query(articlePanier,idClient, function (err, result)   {


        if (err) throw err;
       // console.log(result);

           Object.keys(result).forEach(function(key) {
             console.log(result);
               var row = result[key];
               num_ref = row.num_reference;
               quantite = row.quantite_article;
               console.log(num_ref)
               console.log(quantite)


           });

           mysqlConnection.query('SELECT num_commande FROM Commande WHERE id_client = ? ',[idClient],
      (err, rows, result) => {
        Object.keys(rows).forEach(function(key) {

          var row = rows[key];
          //idClient = row.id_client;
         SetNumcommande(row.num_commande)
        
         var sql3 = "INSERT INTO Detailcommande(num_commande,quantite_article,num_reference) VALUES (?) " //ajouter l'adresse dans Client
         var values3 = [vrai_num_commande,quantite,num_ref];
             mysqlConnection.query(sql3,[values3], function(err, result) {
               if (err) {
                 mysqlConnection.rollback(function() {
                   throw err;
                 });
               }
               mysqlConnection.commit(function(err) {
                 if (err) {
                   mysqlConnection.rollback(function() {
                     throw err;
                   });
                 }
                 res.send({
                   status:true,

                   message:'Merci pour votre commande'
               })
                 //mysqlConnection.end();

               });
             });



      });


       })


        })

        });
      })

    })








    }
    function SetIdClient(id){
      idClient=id;

      }
    function SetNumcommande(num){
      vrai_num_commande=num;
    }


