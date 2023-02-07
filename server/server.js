// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const path = require("path");

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "..", "build")));

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS
const bandController = require('./controllers/band_controller')
app.use('/api/band', bandController)

const eventController = require('./controllers/event_controller')
app.use('/api/event', eventController)

const stageController = require('./controllers/stage_controller')
app.use('/api/stage', stageController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
})