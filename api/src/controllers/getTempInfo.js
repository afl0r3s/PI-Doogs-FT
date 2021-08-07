const { Temperament } = require('../db');
const axios = require('axios');
const { BASE_URL } = require('../../constants');

function getTempInfo(req, res, next) {
	const dogsTempApi = axios.get(`${BASE_URL}`);
	const dogsTempLocal = Temperament.findAll();
	Promise.all([dogsTempApi, dogsTempLocal])
		.then((response) => {
			let [dogsTempApiResponse, dogsTempLocalResponse] = response;
			return res.send(dogsTempLocalResponse.concat(dogsTempApiResponse.data));
		})
		.catch((err) => next(err));
}


module.exports = {
	getTempInfo
};
