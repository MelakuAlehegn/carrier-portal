const mongoose = require('mongoose')
const { Job, validateJob } = require('../models/jobsModel')

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

const createJob = async (req, res) => {
    const { error } = validateJob(req.body)
    if (error) {
        return res.status(400).json(error.details[0].message)
    }
    const job = await Job.create(req.body)
    return res.status(201).json(job)
}

const updateJob = async (req, res) => {
    const { id } = req.params
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ error: 'Invalid job ID format' })
    }
    const job = await Job.findById(id)
    if (!job) {
        return res.status(404).json({ message: "Job not found" })
    }
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true
    })
    res.status(200).json(updatedJob)
}
module.exports = { getJobs, getJob, createJob, updateJob }