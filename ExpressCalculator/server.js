const express = require("express");

const app = express()

// Middleware to parse JSON body
app.use(express.json());

app.post("/add", (req, res) => {
    const {val1, val2} = req.body
    const sum = Number(val1) + Number(val2)
    res.json(
        {
            "Sum": sum
        }
    )
})

app.use("/calculate", )

app.listen(1029, () => {
    console.log("server is listening on port 1029 [http://localhost:1029]")
})