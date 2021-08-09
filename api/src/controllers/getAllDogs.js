require('dotenv').config();
const { Dog, Temperament } = require('../db');
const axios = require('axios');
const { BASE_URL } = require('../../constants');
const { API_KEY } = process.env;

function getAllDogs(_req, res, next) {
	const dogsInfoLocal = Dog.findAll({include: Temperament});
	const dogsInfoApi = axios.get(`${BASE_URL}?api_key=${API_KEY}`);
	Promise.all([dogsInfoLocal, dogsInfoApi])
		.then((response) => {
			let [dogsInfoLocalReponse, dogsInfoApiResponse] = response;
            
            dogsInfoLocalReponse = dogsInfoLocalReponse.map(dl => {
                return {
                    id: dl.id,
                    name: dl.name,
                    temperament: dl.temperaments.map(t=> t.name).join(', '),
                    image: dl.image,
                }
            })
            
            console.log("1)", dogsInfoLocalReponse)
            let dogsInfoShow = dogsInfoApiResponse.data.slice(0,2);
            dogsInfoShow = dogsInfoShow.map(d => {
                return {
                    id: d.id,
                    name: d.name,
                    temperament: d.temperament,
                    image: d.image.url,
                }
            })
            console.log(dogsInfoShow)
			return res.send(dogsInfoLocalReponse.concat(dogsInfoShow));
		})
		.catch((error) => next(error));

	// console.log(dogsInfoApi.data);
	// return res.send('estoy en get /Dogs')
}

/*
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
*/

module.exports = {
	getAllDogs,
};
