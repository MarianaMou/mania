var cors = require("cors")
const express= require('express');
var app = express();
const bodyparser = require('body-parser');
var loginController = require('./Controllers/login-controller');
var registerController = require('./Controllers/register-controller');
var mysqlConnection = require('./config');

app.use(bodyparser.json());

var serverAngular = {
  origin: "http://localhost:4200"
}
app.use(cors(serverAngular));

var urlencodedParser= app.use(bodyparser.urlencoded({ extended: true }));


app.post('/api/login',loginController.login)
app.post('/api/register',registerController.register)
app.get('/api/register',registerController.register)




//Tous les clients
app.get('/Clients', function (req, res) {
    mysqlConnection.query('SELECT * FROM Client',
    (err,rows,results) => {
    if(!err) res.send(rows);
    else
    console.log(err);
    });
    })


    const value= Math.floor(100000 + Math.random() * 900000);
    //Client spécifique
    app.get('/Clients/:id', (req, res)=> {
        mysqlConnection.query('SELECT * FROM Client WHERE id_client = ?',[req.params.id],(err,rows,results) => {
        if(!err) res.send(rows);
        else
        console.log(err);
        });
        })

    //Supprimer un client
    app.delete('/Clients/:id', (req, res)=> {
        mysqlConnection.query('DELETE FROM Client WHERE id_client = ?',[req.params.id],(err,rows,results) => {
        if(!err) res.send('Client supprimé');
        else
        console.log(err);
        });
        })


        app.listen(3000,()=>console.log('Express server running at port 3000'));