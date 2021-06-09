
//EXTERNAL IMPORT
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')

//INTERNAL IMPORT
const connectDB = require('./database/connection')


//INITIALIZE APP 
const app = express() 



//LOAD CORS ERRORS HANDLER
app.use((req, res, next) => {
    res.setHeader('Allow-Access-Control-Origin', '*')
    res.setHeader('Allow-Access-Control-Method', 'OPTION, PUT, POST, GET, DELETE')
    res.setHeader('Allow-Acces-Control-Headers', 'Content-Type, Authorization')
    next()
})

//LOAD BODY PARSER FOR PARSER REQUEST
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//INITIALIZE MORGAN FOR LOGGING REQUEST
app.use(morgan('tiny'))


//INITIALIZE DOTENV 
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//MONGO DB
connectDB()

//LOAD ROUTES MIDDLEWARE
app.use('/feed', require('./routes/feed'))

//LOAD GLOBAL ERROR HANDLER 
app.use((error, req, res, next) => {
    const status = error.statusCode || 500
    const message = error.message
    const data  = error.data
    res.status(status).json({message: message, data: data})
})

//LOAD PORT AND LISTEN
app.listen(PORT, (req, res, next) => {
console.log(`App is Running On Port ${PORT}`)
})




