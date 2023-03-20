import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'quanlykh'
}) 

connection.query(
    'SELECT * FROM users',
    function(err, results, fields) {
        if (err) console.error('err: ' + err)
        console.log('results: ', results);
    }
)

export default connection