const express = require("express")

const app= express()


function lw(req ,res){
        res.send("welcome to LW")
        console.log("client connected in page data....")
}


app.get("/data", lw)
app.listen(3000)
~

