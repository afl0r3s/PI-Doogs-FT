require('dotenv').config();
const { Dog, Temperament } = require('../db');
const axios = require('axios');
const { BASE_URL, SEARCH_URL } = require('../../constants');
const { API_KEY } = process.env;
const { Op } = require('sequelize');

async function getAllDogs(req, res, next) {
	const { name } = req.query;
	const dogsInfoApi = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
	
	if (name) {
		const dogsInfoApiName = axios.get(`${BASE_URL}${SEARCH_URL}${name}&api_key=${API_KEY}`);
		const dogsInfoLocalName = Dog.findAll({
			where: {
				name: { [Op.like]: `%${name}%` },
			},
			include: Temperament,
		});
		let [dogsInfoLocalNameRes, dogsInfoApiNameRes] = await Promise.all([dogsInfoLocalName, dogsInfoApiName])
		try {
			if (dogsInfoLocalNameRes.length > 0) {
				dogsInfoLocalNameRes = dogsInfoLocalNameRes.map((dl) => {
					return {
						id: dl.id,
						name: dl.name,
						temperament: dl.temperaments.map((t) => t.name).join(', '),
						image: dl.image,
					};
				});
			}
			if (dogsInfoApiNameRes.data.length === 0) {
				var dogsInfoByNameShow = {
					id: 0,
					name: "No results",
					temperament: "--",
					image: "https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg"
				};
			}
			if (dogsInfoApiNameRes.data.length > 0) {
				let imagesApi = dogsInfoApi.data.map((i) => {
					//console.log(i.id, i.image.id, i.image.url)
					return {
						id: i.image.id,
						value: i.image.url,
					};
				});
				var dogsInfoByNameShow = dogsInfoApiNameRes.data.filter(e => e.reference_image_id !== undefined) 
				dogsInfoByNameShow = dogsInfoByNameShow.map(e => {
					let auxSearch = imagesApi.filter((f) => f.id === e.reference_image_id);
					return {
						id: e.id,
						name: e.name,
						temperament: e.temperament,
						image: auxSearch[0].value,
					}
				});
			}
			//console.log('1', dogsInfoLocalNameRes.concat(dogsInfoByNameShow));
			res.send(dogsInfoLocalNameRes.concat(dogsInfoByNameShow));
		} 
		catch (error) {
			next(error);
		}
	} else {
		try {
			let dogsInfoLocal = await Dog.findAll({ include: Temperament });
			dogsInfoLocal = dogsInfoLocal.map((dl) => {
				var weight_metric_local = dl.weight.split('–').length <= 1 ? dl.weight.split('-') : dl.weight.split('–');
				var height_metric_local = dl.height.split('–').length <= 1 ? dl.height.split('-') : dl.height.split('–');
				return {
					id: dl.id,
					name: dl.name,
					temperament: dl.temperaments.map((t) => t.name).join(', '),
					image: dl.image,
					weight_min: weight_metric_local[0].trim(),
					weight_max: weight_metric_local[1].trim(),
					height_min: height_metric_local[0].trim(),
					height_max: height_metric_local[1].trim(),
					origin: 'DB'
				};
			});
			let dogsInfoShow = dogsInfoApi.data.map((d) => {
				var weight_metric = d.weight.metric.split('–').length <= 1 ? d.weight.metric.split('-') : d.weight.metric.split('–');
				if(weight_metric[1] === undefined) weight_metric[1] = ''
				if(d.weight.metric.includes('NaN')) {
					let weight_imperial = d.weight.imperial.split('–').length <= 1 ? d.weight.imperial.split('-') : d.weight.imperial.split('–')
					if(isNaN(weight_imperial[0])) {
						weight_imperial[0]='0';
					}  
					weight_metric[0] = ''+ parseInt(weight_imperial[0].trim()) * 0.45
					weight_metric[1] = ''+ parseInt(weight_imperial[1].trim()) * 0.45
				}
				var height_metric = d.height.metric.split('–').length <= 1 ? d.height.metric.split('-') : d.height.metric.split('–');
				if(height_metric[1] === undefined) height_metric[1] = ''

				if(d.temperament === undefined) d.temperament = 'None'
				
					return {
						id: d.id,
						name: d.name,
						temperament: d.temperament,
						image: d.image.url,
						weight_min: weight_metric[0].trim(),
						weight_max: weight_metric[1].trim(),
						height_min: height_metric[0].trim(),
						height_max: height_metric[1].trim(),
						origin: 'API'
					};
				});
			//console.log("1",dogsInfoLocal.concat(dogsInfoShow))
			return res.send(dogsInfoLocal.concat(dogsInfoShow));
		} catch (error) {
			next(error);
		}
	}
}

module.exports = {
	getAllDogs,
};
