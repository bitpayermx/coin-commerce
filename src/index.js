const express = require('express')
const {
    COINBASE_API_KEY,
    COINBASE_WEBHOOK_SECRET,
    DOMAIN
} = require('./config')

const app = express()

app.listen(3000, ()=>{
    console.log('server on port 3000')
})