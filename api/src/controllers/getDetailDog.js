require('dotenv').config();
const { Dog, Temperament } = require('../db');
const axios = require('axios');
const { BASE_URL } = require('../../constants');
const { API_KEY } = process.env;
const { Op } = require('sequelize');

async function getDetailDog(req, res, next) {
    const { idRaza } = req.params;
    if(typeof idRaza === 'string' && idRaza.length > 10 ){
        let dogsInfoLocal = await Dog.findByPk(idRaza, { include: Temperament });
        dogsInfoLocal = {
                id:         dogsInfoLocal.id,
				name:       dogsInfoLocal.name,
				temperament:dogsInfoLocal.temperaments.map((t) => t.name).join(', '),
                height:     dogsInfoLocal.height,
                weight:     dogsInfoLocal.weight,
                life_span:  dogsInfoLocal.life_span,
				image:      dogsInfoLocal.image,
        };
        //console.log('1', dogsInfoLocal);
        res.send(dogsInfoLocal);
    }else {
        const dogsInfoApi = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
        let dogsInfoResult = dogsInfoApi.data.filter(e => parseInt(e.id) === parseInt(idRaza));
        dogsInfoResult = {
            id:         dogsInfoResult[0].id,
            name:       dogsInfoResult[0].name,
            temperament:dogsInfoResult[0].temperament,
            height:     dogsInfoResult[0].height.metric,
            Weight:     dogsInfoResult[0].weight.metric,
            life_span:  dogsInfoResult[0].life_span,
            image:      dogsInfoResult[0].image.url,
        }
        //console.log('1', dogsInfoResult);
        res.send(dogsInfoResult);
    }
    
    //let [dogsInfoApiRes,dogsInfoLocalRes] = await Promise.all([dogsInfoApi,dogsInfoLocal]);
    
    
    
    /*
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
				var dogsInfoByNameShow = ['no results found...'];
			}
			if (dogsInfoApiNameRes.data.length > 0) {
				let imagesApi = dogsInfoApi.data.map((i) => {
					return {
						id: i.image.id,
						value: i.image.url,
					};
				});
				var dogsInfoByNameShow = dogsInfoApiNameRes.data.map((d) => {
					let auxSearch = imagesApi.filter((e) => e.id === d.reference_image_id);
					return {
						id: d.id,
						name: d.name,
						temperament: d.temperament,
						image: auxSearch[0].value,
					};
				});
			}
			console.log('1', dogsInfoLocalNameRes.concat(dogsInfoByNameShow));
			res.send(dogsInfoLocalNameRes.concat(dogsInfoByNameShow));
		} catch (error) {
			next(error);
		}
	
    
    else {
		try {
			let dogsInfoLocal = await Dog.findAll({ include: Temperament });
			dogsInfoLocal = dogsInfoLocal.map((dl) => {
				return {
					id: dl.id,
					name: dl.name,
					temperament: dl.temperaments.map((t) => t.name).join(', '),
					image: dl.image,
				};
			});
			let dogsInfoShow = dogsInfoApi.data.map((d) => {
					return {
						id: d.id,
						name: d.name,
						temperament: d.temperament,
						image: d.image.url,
					};
				});
			console.log("1",dogsInfoLocal.concat(dogsInfoShow))
			return res.send(dogsInfoLocal.concat(dogsInfoShow));
		} catch (error) {
			next(error);
		}
	}
    */
}

module.exports = {
	getDetailDog,
};
