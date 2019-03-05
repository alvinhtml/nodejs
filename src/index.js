const express = require("express")

const app = express()


const db = require('./db')




app.get('/', (req, res, next) => {
    console.log(1)
    next()
})

app.get('/', (req, res) => {
    console.log(2)
    res.send('<h1>hello world!</h1><h2>Welcome to Express!</h2>')
})

app.get(/^\/article\/([\d]+)$/, (req, res) => {

    const sql = "SELECT * FROM `ous` WHERE `id`=" + req.params[0]


    db.query(sql, function (err, rows, fields) {

        if (err) {

        } else {

            console.log(rows[0])
            res.send('<h2>名称：<span style="color:red">' + rows[0].name + '</span></h2>')
        }
    })


})


app.listen(8080)
