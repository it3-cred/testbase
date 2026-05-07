const express = require("express")

const app = express()

app.use(express.json())



app.listen(9595, ()=>{
    console.log(`listening at Port 9595 [http://localhost:9595]`)
})