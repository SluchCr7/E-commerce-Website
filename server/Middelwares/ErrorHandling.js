const notfound = (req,res, next) => {
    const Error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(400)
    next(Error)
}
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports= {errorHandler}