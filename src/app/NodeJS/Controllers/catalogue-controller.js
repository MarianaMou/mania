var mysqlConnection = require('./../config');

module.exports.catalogue=function(req,res){
console.log("ici")
  mysqlConnection.query('SELECT num_reference,nom_article,prix,couleur,sous_categorie FROM Article',
    (err,rows,results) => {
    if(!err) res.send(rows);
    else
    console.log(err);
    });
}


