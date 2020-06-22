var mysqlConnection = require('./../config');

module.exports.catalogue = function(req, res) {

    mysqlConnection.query('SELECT * FROM Article',
        (err, rows, results) => {
            if (!err) res.send(rows);
            else
                console.log(err);
        });
}
