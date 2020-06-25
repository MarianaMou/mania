var mysqlConnection = require('./../config');



module.exports.infoUptade = function(req, res) {
var nom=req.body.nom;
var prenom=req.body.prenom;
var num_tel=req.body.tel;
var email = req.body.email;
var bancaire = req.body.bancaire;

//Adresse
var rue = req.body.rue;
var num_rue=req.body.num_rue;
var ville = req.body.ville;
var code_postal = req.body.code_postal;


let data = [prenom,nom,num_tel,email,bancaire,rue,num_rue,ville,code_postal,email]
console.log(bancaire);
let sql = 'UPDATE Client INNER JOIN Adresse ON Client.id_adresse=Adresse.id_adresse SET prenom = ? , nom= ? , num_tel = ? , email = ? , Coordonne_bancaire = ? , rue = ? , num_rue= ? , ville= ? , code_postal= ? WHERE email= ?';
  mysqlConnection.query(sql,data,
      (err, rows, results) => {
          if (!err)  res.send({
            status:true,
             message:"Modifiée"

              })
          else
              console.log(err);
      });
}
//UPDATE Client INNER JOIN Adresse ON Client.id_adresse=Adresse.id_adresse Set Client.prenom ="Tata" , Client.nom="Turfu" , Client.num_tel ="06" , Client.email ="@yahoo" ,Client.Coordonne_bancaire="kiaa",Adresse.rue="planche",Adresse.num_rue=3,Adresse.ville="Mok",Adresse.code_postal=2909 WHERE Client.email="LisaLM@gmail.com"
