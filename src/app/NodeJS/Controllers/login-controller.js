var mysqlConnection = require('./../config');


module.exports.login=function(req,res){
    var email=req.body.email;
    var mot_de_passe=req.body.password;


    if(email!="") {
      mysqlConnection.query('SELECT * FROM Client WHERE email = ?',[email], function (error, results, fields) {
        if (error) {
            res.send({
              status:false,
              message:'Requête erronée'
              })
        }else{
          if(results.length >0){
              if(mot_de_passe==results[0].mot_de_passe){
                  res.send({
                      status:true,
                      message:'true',

                  })

              }else{
                  res.send({
                    status:false,
                    message:"mot de passe incorrect"
                   });

              }

          }
          else{
            res.send({
                status:false,
              message:"email incorrect"
            });
          }
        }
      });
    }
    else {
      res.send({
        status:false,
      message:"entrer un email"
    });
    }

}


