const { application } = require('express')
const mysql = require('mysql2')

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'projeto3'
})

connection.connect((err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Database connected')
})

application.get("/fetch", (req,res)=>{
    connection.query("select * from login", function(err, result, fields){
        if(err){
            console.log(err)
        }
    })
})

module.exports=connection