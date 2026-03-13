const pool = require("../config/database")

const getAllJobs = async () => {
  const result = await pool.query("SELECT * FROM jobs")
  return result.rows
}

const getJobById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM jobs WHERE id = $1",
    [id]
  )
  return result.rows[0]
}

const createJob = async (job) => {
  const { title, company, location, description, salary } = job

  const result = await pool.query(
    "INSERT INTO jobs (title, company, location, description, salary) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [title, company, location, description, salary]
  )
  return result.rows[0]
}
const editJob = async (id, job) => {
  const { title, company, location, description, salary } = job
  const result = await pool.query(
    "UPDATE jobs SET title=$1,company=$2,location=$3,description=$4,salary=$5 WHERE id=$6 RETURNING *",
    [title, company, location, description, salary, id]
  )
  return result.rows[0]
}

const removeJob = async (id) => {
  await pool.query("DELETE FROM job WHERE id=$1", [id])
}




module.exports = { getAllJobs, getJobById, createJob, editJob, removeJob }