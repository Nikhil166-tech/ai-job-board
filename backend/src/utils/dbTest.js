const pool = require("../config/database")

const testDB = async () => {
    try {
        const res = await pool.query("SELECT NOW()")
        console.log("Database connected:", res.rows[0])
    } catch (err) {
        console.error("Database error:", err)
    }
}

module.exports = testDB