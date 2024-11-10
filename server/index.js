const express = require('express')
const app = express()
const xss = require('xss-clean')
const cors = require('cors') 
require('dotenv').config()
const connectDB = require('./config/db')
const {errorHandler} = require('./Middelwares/ErrorHandling')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
// Database connection

connectDB()

// Middleware

app.use(express.json())

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
)

// XSS Attack Middelware

app.use(xss())

app.use(rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // Limit each IP to 10 requests per `window` (here, per 10 minutes)
}))

app.use(helmet())

// Routes

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use("/api/auth", require('./routes/auth'))
app.use("/api/order", require('./routes/order'))
app.use("/api/password", require("./routes/Password"))

// Error handling After Routes

app.use(errorHandler)

// Listening

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})