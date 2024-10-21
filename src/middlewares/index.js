function handleError(error, req, res, next){
    return res.json(error.message)

}


function logger(req, res, next){
    console.log('incoming requesti')
    next()
}

function authroize(req, res, next) {
    return res.status(404).json({
        msg: "Not Found"
    })
}

function getError(){
    throw new Error("Error DB")
}

function logger(req, res, next){
    console.log('incoming requesti')
    next()
}

function authroize(req, res, next) {
    return res.status(404).json({
        msg: "Not Found"
    })
}

function checkData(req, res, next){
    const id = req.params.id;
    const course = courses.find((item) => {
        return item.id == id
    })
    if(!course){
        return res.status(404).json({
            error: 'Resource Not found'
        })
    }
    next()
}

module.exports = { handleError, logger}