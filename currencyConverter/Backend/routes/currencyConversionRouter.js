const express = require('express')
const router = express.Router()
const {converterInterface} = require("../controllers/currencyConversionController")

router.get("/", converterInterface)

module.exports = router