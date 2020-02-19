//npm init
//npm install express

const express = require("express")

const app = express()

const students =[{
    name: "aww"},
    {name: "yyeeee"
}]

app.get("/", (request, response) => {
    response.json({
       students
    })
})

app.listen(9000)