import connection from "../configs/connectDB"

const getHomePage = (req, res) => {
    //logic
    let data = []
    connection.query('SELECT * FROM users', (err, results, fields) => {
        results.map(row => {
            data.push({
                id: row.id,
                firstName: row.firstName,
                lastName: row.lastName,
                address: row.address
            })
        })
        return res.render('index.ejs', { dataUser: data })
    })

}

module.exports = {
    getHomePage
}