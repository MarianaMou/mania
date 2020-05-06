var mysqlConnection = require('./../config');

module.exports.catalogue = function(req, res) {
    console.log("ici")
    mysqlConnection.query('SELECT * FROM Article',
        (err, rows, results) => {
            if (!err) res.send(rows);
            else
                console.log(err);
        });
}
