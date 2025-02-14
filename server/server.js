const express = require('express')
const app = express()

app.get("/api",(req,res)=>{
    res.json({"Nombres":["sofia","sergio","eduardo","carlos"]})
})

app.listen(8000,() => {console.log("server en puerto 8000")})
