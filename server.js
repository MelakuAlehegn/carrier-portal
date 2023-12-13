const express = require('express')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')


const jobRoutes = require('./routes/api/jobRoutes')
const userRoutes = require('./routes/api/userRoutes')

const cors = require('cors')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

const app = express()

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/jobs', jobRoutes)
app.use('/api/users', userRoutes)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))