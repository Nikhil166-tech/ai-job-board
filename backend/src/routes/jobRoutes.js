const express = require("express")
const router = express.Router()

const { getJob, createJob, updateJob, deleteJob, getJobs } = require("../controllers/jobController")
router.get("/jobs", getJobs)
router.get("/jobs/:id", getJob)   // ✅ correct
router.post("/jobs", createJob)
router.put("/jobs/:id", updateJob)
router.delete("/jobs/:id", deleteJob)

module.exports = router