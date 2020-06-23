var cors = require("cors")
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
var loginController = require('./Controllers/login-controller');
var registerController = require('./Controllers/register-controller');
var catalogueController = require('./Controllers/catalogue-controller');
var commentaireController = require('./Controllers/commentaire-controller');
var avisController = require('./Controllers/avis-controller');
var infoclientController = require('./Controllers/infoclient-controller');
var infocommandeController = require('./Controllers/infocommande-controller');
var pullController = require('./Controllers/Catégorie/Pull-controller');
var jupeController = require('./Controllers/Catégorie/Jupe-controller');
var topController = require('./Controllers/Catégorie/Top-controller');
var robeController = require('./Controllers/Catégorie/Robe-controller');
var vesteController = require('./Controllers/Catégorie/Veste-controller');
var pantalonController = require('./Controllers/Catégorie/Pantalon-controller')
var sweatshirtController = require('./Controllers/Catégorie/Sous-catégorie/Pulls/Sweatshirt-controller')
var polaireController = require('./Controllers/Catégorie/Sous-catégorie/Pulls/Polaire-controller')
var plisséeController = require('./Controllers/Catégorie/Sous-catégorie/Jupes/Jupeplissée-controller')
var crayonController = require('./Controllers/Catégorie/Sous-catégorie/Jupes/Jupecrayon-controller')
var debardeurController = require('./Controllers/Catégorie/Sous-catégorie/Tops/Debardeur-controller')
var blouseController = require('./Controllers/Catégorie/Sous-catégorie/Tops/Blouse-controller')
var soiréeController = require('./Controllers/Catégorie/Sous-catégorie/Robes/Robesoirée-controller')
var étéController = require('./Controllers/Catégorie/Sous-catégorie/Robes/Robeété-controller')
var hiverController = require('./Controllers/Catégorie/Sous-catégorie/Vestes/Vestehiver-controller')
var legereController = require('./Controllers/Catégorie/Sous-catégorie/Vestes/Vestelegere-controller')
var classiqueController = require('./Controllers/Catégorie/Sous-catégorie/Pantalons/Pantalonclassique-controller')
var shortController = require('./Controllers/Catégorie/Sous-catégorie/Pantalons/Short-controller')

var mysqlConnection = require('./config');

app.use(bodyparser.json());

var serverAngular = {
    origin: "http://localhost:4200"
}
app.use(cors(serverAngular));

var urlencodedParser = app.use(bodyparser.urlencoded({ extended: true }));


app.post('/api/login', loginController.login)
app.post('/api/register', registerController.register)
app.get('/api/register', registerController.register)
app.get('/api/catalogue', catalogueController.catalogue)
app.post('/api/commentaire', commentaireController.commentaire)

app.post('/api/soumettre_avis', avisController.avis)
app.post('/api/client', infoclientController.infoclient)
app.get('/api/commande', infocommandeController.infocommande)

//Categorie
app.get('/api/pull', pullController.pulls)
app.get('/api/jupe', jupeController.jupes)
app.get('/api/top', topController.tops)
app.get('/api/robe', robeController.robes)
app.get('/api/veste', vesteController.vestes)
app.get('/api/pantalon', pantalonController.pantalons)

//Sous-categorie Pull
app.get('/api/sweatshirt', sweatshirtController.sweatshirts)
app.get('/api/polaire', polaireController.polaires)

//Sous-categorie Jupe
app.get('/api/plisse', plisséeController.plissées)
app.get('/api/crayon', crayonController.crayons)

//Sous-categorie Top
app.get('/api/debardeur', debardeurController.debardeurs)
app.get('/api/blouse', blouseController.blouses)

//Sous-categorie Robe
app.get('/api/soire', soiréeController.soirées)
app.get('/api/ete', étéController.été)

//Sous-categorie Veste
app.get('/api/vestehiver', hiverController.hiver)
app.get('/api/vestelegere', legereController.legere)

//Sous-categorie Pantalon
app.get('/api/classique', classiqueController.classique)
app.get('/api/short', shortController.short)

app.get('/Avis', function(req, res) {
    mysqlConnection.query('SELECT nom,prenom,commentaire,nb_etoile,DATE_FORMAT(date_avis,"%d-%m-%Y") as Date FROM Avis INNER JOIN Client WHERE Avis.num_client=Client.id_client AND Avis.num_reference="CLK21C01J-G11"',
        (err, rows, results) => {
            if (!err) res.send(rows);
            else
                console.log(err);
        });
})

//Tous les clients
app.get('/Clients', function(req, res) {
    mysqlConnection.query('SELECT * FROM Client',
        (err, rows, results) => {
            if (!err) res.send(rows);
            else
                console.log(err);
        });
})


const value = Math.floor(100000 + Math.random() * 900000);
//Client spécifique
app.get('/Clients/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM Client WHERE id_client = ?', [req.params.id], (err, rows, results) => {
        if (!err) res.send(rows);
        else
            console.log(err);
    });
})

//Supprimer un client
app.delete('/Clients/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM Client WHERE id_client = ?', [req.params.id], (err, rows, results) => {
        if (!err) res.send('Client supprimé');
        else
            console.log(err);
    });
})




app.listen(3000, () => console.log('Express server running at port 3000'));
