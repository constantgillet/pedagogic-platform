const mysql = require('mysql')
const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '123456',
    database : 'pedagogic_platform'
})

connection.connect((err) => {
    if (err) throw err
})

module.exports = connection
