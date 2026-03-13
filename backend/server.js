const app = require("./src/app")
const testDb = require("./src/utils/dbTest")
const PORT = process.env.PORT || 5000

testDb()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})