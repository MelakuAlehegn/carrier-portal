const express = require('express')

const cors = require('cors')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

const app = express()

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))