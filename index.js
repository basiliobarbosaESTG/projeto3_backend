const express = require("express")
const config = require('./src/config/config');
const userRoute = require("./src/routes/route.user")

const app = express()
app.use(userRoute)

app.listen(config.port, () => {
    console.log(`server running on port ${config.port}`)
})


