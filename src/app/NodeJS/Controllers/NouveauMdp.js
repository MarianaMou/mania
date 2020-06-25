var mysqlConnection = require('./../config');


module.exports.NewMotPasse = function(req, res) {
var email = req.body.email;
var actuel = req.body.actuel_mdp;
var nouveau = req.body.nouveau_mdp;
var mdp =""


  mysqlConnection.query('SELECT mot_de_passe FROM Client WHERE email = ? ',[email],
      (err, rows, result) => {

        Object.keys(rows).forEach(function(key) {
          var row = rows[key];
          mdp = row.mot_de_passe;


      });
          if (mdp==actuel && !err) {
            let data = [nouveau,email]

let sql = 'UPDATE Client SET mot_de_passe = ? WHERE email=?';
  mysqlConnection.query(sql,data,
      (err, rows, results) => {
          if (!err)  res.send({
            status:true,
             message:"Mot de passe modifié avec succès"

              })
          else {console.log(err);}

      });
            //res.send(rows);
          }
          else
              res.send({
                status:false,
                message:"Mot de passe incorrect"
                })
      });
}
