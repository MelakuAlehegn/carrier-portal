const express = require('express')
const { getJobs, getJob } = require('../../controllers/jobController')

const router = express.Router()
router.get('/', getJobs)
router.get('/:id', getJob)


module.exports = router

