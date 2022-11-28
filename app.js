//require é um método usado para importar os modules é um ficheiro js que exporta código 
require('dotenv').config()

const express = require('express')
const router = require('./src/routes/router.users')
const passport = require('passport')
const initializePassport=require('./src/authentications/authentication.users')
initializePassport(passport)

const app=express()
app.use(express.json()) //parse json bodies in the request object
app.use(router)
app.use(passport.initialize())

//porta do servidor
app.listen(3000,() => {
    console.log('O Servidor está a funcionar')
})