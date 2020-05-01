var mysqlConnection = require('./../config');


module.exports.login=function(req,res){
    var email=req.body.email;
    var mot_de_passe=req.body.password;
    console.log(req.body);

    //res.status(200).send({"message":"Donnée reçu"});
    mysqlConnection.query('SELECT * FROM Client WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'Requête erronée'
            })
      }else{
        if(results.length >0){
            if(mot_de_passe==results[0].mot_de_passe){
                res.send({
                    status:true,
                    message:'Connexion réussie',

                })
            }else{
                res.send({
                  status:false,
                  message:"Mot de passe ou Adresse email incorrect"
                 });
            }

        }
        else{
          res.send({
              status:false,
            message:"L'adresse email n'existe pas"
          });
        }
      }
    });
}


