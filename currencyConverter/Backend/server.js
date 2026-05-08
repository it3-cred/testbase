const express = require("express")
require('dotenv').config()

const app = express()

app.use(express.json())

app.use("/", require("./routes/currencyConversionRouter"))



app.listen(9595, ()=>{
    console.log(`listening at Port 9595 [http://localhost:9595]`)
})