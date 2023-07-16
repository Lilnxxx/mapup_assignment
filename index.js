import express from 'express'
import apiR from './Routes/api.js'
const app= express()

app.use(express.json())
app.use('/api',apiR)
app.listen(process.env.port||5000,()=>{
    console.log("ready on port 5000")
})
