const mongoose = require('mongoose')
const { Job } = require('../models/jobsModel')

const getJobs = async (req, res) => {
    let { page, limit } = req.query
    limit = Number(limit)
    page = Number(page)
    let response = await Job.find()
    res.status(200).json(response)
}

const getJob = async (req, res) => {
    let jobId = req.params.id
    if (!mongoose.isValidObjectId(jobId)) {
        return res.status(400).json({ error: 'Invalid job ID format' })
    }
    const job = await Job.findById(jobId)
    if (!job) {
        return res.status(400).json({ error: 'Job not found' })
    }
    return res.status(200).json(job)
}
module.exports = { getJobs, getJob }