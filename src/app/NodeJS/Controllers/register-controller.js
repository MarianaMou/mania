var mysqlConnection = require('./../config');

module.exports.register=function(req,res){
const value= Math.floor(100000 + Math.random() * 900000);

//Client
var id_client=value;
var nom=req.body.nom;
var prenom=req.body.prenom;
var num_tel=req.body.tel;
var email=req.body.email;
var mot_de_passe  = req.body.password;

//Adresse
var rue = req.body.rue;
var num_rue=req.body.num_rue;
var ville = req.body.ville;
var code_postal = req.body.code_postal;
console.log(req.body);
    console.log("ici");
    var id = 0;
        mysqlConnection.query('SELECT * FROM Adresse WHERE rue = ? AND num_rue = ? AND ville = ? AND code_postal = ?', [rue,num_rue,ville,code_postal],
        (err,rows,results) => {

        if(!rows) {
            var id_adresse = 'SELECT id_adresse FROM Adresse WHERE rue = ?';
            mysqlConnection.query(id_adresse,[rue], function (err, result) {

                if (err) throw err;
            // console.log(result);  //affiche id correspond à l'adresse

                Object.keys(result).forEach(function(key) {
                    var row = result[key];
                    id = row.id_adresse;


                });

  var sql = "INSERT INTO Client(id_client,id_adresse,nom,prenom,num_tel,email,mot_de_passe) VALUES (?)";
  var values = [id_client,id,nom,prenom,num_tel,email,mot_de_passe];
  mysqlConnection.query(sql,[values],function (error, results) {
            if (error) {
          res.send({
                    status:false,
                     message:'erreur dans la requête'

                      })
                      console.log(id)
                    }else{
                        res.send({
                          status:true,
                          data:results,
                          message:'Inscription réussie'
                      })
                    }
                  })

              });



        }
else {// nouvelle adresse
  mysqlConnection.beginTransaction(function(err) {
console.log("ça rentre");
    if (err) { throw err; }
    var sql2 = "INSERT INTO Adresse(rue,num_rue,ville,code_postal) VALUES (?)"
    var values2 = [rue,num_rue,ville,code_postal];
    mysqlConnection.query(sql2, [values2], function(err, result) {
      if (err) {
        mysqlConnection.rollback(function() {
          throw err;
        });
      }

  var le_id = "SELECT id_adresse FROM Adresse WHERE rue = ?"
  mysqlConnection.query(le_id,rue, function (err, result)   {


    if (err) throw err;
    console.log(result);  //affiche id correspond à l'adresse

       Object.keys(result).forEach(function(key) {
           var row = result[key];
           id = row.id_adresse;


       });


  var sql3 = "INSERT INTO Client(id_client,id_adresse,nom,prenom,num_tel,email,mot_de_passe) VALUES (?)" //ajouter l'adresse dans Client
  var values3 = [id_client,id,nom,prenom,num_tel,email,mot_de_passe];
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
            data:results,
            message:'Inscription réussie'
        })
          //mysqlConnection.end();

        });
      });

    })

    });
  });}






        })


    }

