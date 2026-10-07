const logMiddleware = (req, res, next) => {
    console.log("HALLO SAYA LOG MIDDLEWARE")

    next
}

export default logMiddleware