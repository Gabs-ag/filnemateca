module.exports = (req, res, next) =>{
    console.log("passando pelo middleware global...")
    next()
}