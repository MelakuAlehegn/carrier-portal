const express = require('express')
const { getJobs, getJob, createJob, updateJob } = require('../../controllers/jobController')

const router = express.Router()
router.get('/', getJobs)
router.get('/:id', getJob)
router.post('/', createJob)
router.put('/:id', updateJob)

module.exports = router

