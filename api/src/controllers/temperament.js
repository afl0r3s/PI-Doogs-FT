const { Temperament } = require('../db');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const { BASE_URL } = require('../../constants');

function getAllInfo(req, res, next) {
	const dogsTempApi = axios.get(`${BASE_URL}`);
	const dogsTempLocal = Temperament.findAll();
	Promise.all([dogsTempApi, dogsTempLocal])
		.then((response) => {
			let [dogsTempApiResponse, dogsTempLocalResponse] = response;
			return res.send(dogsTempLocalResponse.concat(dogsTempApiResponse.data));
		})
		.catch((err) => next(err));
}
/* 
function addTemperament(req,res,next){
    console.log("1)", req.body);
    return res.send('Estoy en el post de Temperament...')
}
 */

async function addTemperament(req, res, next) {
    console.log("1)", req.body);
	const {name} = req.body;
	//const infoBody = req.body;
	//const id = uuidv4();
	//const infoBody = {...req.body, id};

	try {
		//const createdTemperament = await Temperament.create(infoBody);
		const createdTemperament = await Temperament.create({
			id: uuidv4(),
			name,
		});
        return res.send(createdTemperament)
	} catch (error) {
		next(error);
	}
}




module.exports = {
	getAllInfo,
    addTemperament,
};
