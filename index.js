console.log("eu sou o basilio")

const express = require("express")

const app = express()

app.listen(3000, () => {
    console.log(`server running on port ${3000}`)
})

app.get("/user", function(req, res){ /**req cliente vai mandar para servidor e res é o que o servidor manda */
    res.send("eu sou o buzz")
})

