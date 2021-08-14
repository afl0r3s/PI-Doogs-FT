require('dotenv').config();
const { Temperament } = require('../db');
const axios = require('axios');
const { BASE_URL } = require('../../constants');
const { API_KEY } = process.env;

async function getTempInfo(_req,res,next){
    try {
        let tempInfoLocal = await Temperament.findAll();
        tempInfoLocal = tempInfoLocal.map(t => {
            return {
                id: t.id,
                name: t.name
            }
        })
        return res.send(tempInfoLocal)
        /*
        const dogsInfotApi = await axios.get(`${BASE_URL}?api_key=${API_KEY}`); 
        const temperamentsApi = dogsInfotApi.data.map(t => t.temperament); 
        let temperaments = temperamentsApi.map(e => e && e.split(",")).map(e => e && e.map(e2 => e2.trim())).filter(e => e !== undefined);
        temperaments = temperaments.reduce((acc, val) => acc.concat(val), []);
        temperaments = temperaments.filter((item,index)=> temperaments.indexOf(item) === index).sort();
        console.table(temperaments)
        let temperamentesForBD = temperaments.map(t => { return { name: t } });
        return res.send('ruta get temperamentos')
        await Temperament.bulkCreate(temperamentesForBD) ;
        return res.json(temperamentesForBD);
        */
    } catch (error) {
        next(error);
    }
}

module.exports = {
	getTempInfo
};
