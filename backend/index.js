const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://gymmemship:<stronghousegym1>@cluster0.yvbi2vl.mongodb.net/gym-user")

app.listen(4001, () => {
    console.log("Up and running")
})