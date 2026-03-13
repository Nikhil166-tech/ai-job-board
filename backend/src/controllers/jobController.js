const { fetchJobs, addJob, editJob, removeJob, fetchJobById } = require("../services/jobService")

const getJobs = async (req, res) => {
    try {
        const jobs = await fetchJobs()
        res.json(jobs)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to fetch jobs" })
    }
}

const getJob = async (req, res) => {
    try {
        const job = await fetchJobById(req.params.id)
        res.json(job)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to fetch job" })
    }
}

const createJob = async (req, res) => {
    try {
        const job = await addJob(req.body)
        res.status(201).json(job)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to create job" })
    }
}
const deleteJob = async (req, res) => {
    try {
        const job = await removeJob(req.params.id)
        res.json(job)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to delete job" })
    }
}

const updateJob = async (req, res) => {
    try {
        const job = await editJob(req.params.id, req.body)
        res.json(job)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to update job" })
    }
}


module.exports = { getJob, getJobs, createJob, updateJob, deleteJob }