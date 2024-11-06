const express = require('express')
const app = express()
const cors = require('cors') 
require('dotenv').config()
const connectDB = require('./config/db')

// Database connection
connectDB()
app.use(express.json())

// Middleware
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
)

// Routes
app.get('/', (req, res) => {
    res.send('Hello')
})

app.use("/api/auth", require('./routes/auth'))
app.use("/api/order", require('./routes/order'))
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})