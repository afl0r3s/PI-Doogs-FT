const {Dog} = require('../db');

function getAllDogs(req,res,next){
    return Dog.findAll()
        .then((dogs) => res.send(dogs))
        .catch((err) => next(err));
}

module.exports = {
    getAllDogs,
}