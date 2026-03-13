const { getAllJobs, getJobById, createJob, updateJob, deleteJob } = require("../repositories/jobRepository")

const fetchJobs = async () => {
    return await getAllJobs()
}

const fetchJobById = async (id) => {
    return await getJobById(id)
}

const addJob = async (jobData) => {
    return await createJob(jobData)
}

const editJob = async (id, jobData) => {
    return await updateJob(id, jobData)
}

const removeJob = async (id) => {
    return await deleteJob(id)
}

module.exports = { fetchJobs, fetchJobById, addJob, editJob, removeJob }