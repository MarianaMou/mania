const mysql= require('mysql');

var mysqlConnection = mysql.createConnection({
    host:'10.25.10.21',
    user: 'g4',
    password:'WTs1M62tF7U09jl1',
    database:'g4'
})
mysqlConnection.connect((err)=>{
    if(!err)
    console.log('Connection réussie');
    else
    console.log('Connection échouée ');
});


module.exports = mysqlConnection;

