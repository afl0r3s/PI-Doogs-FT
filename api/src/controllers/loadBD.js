const { Temperament } = require('../db');
require('dotenv').config();
const axios = require('axios');
const { BASE_URL } = require('../../constants');
const { API_KEY } = process.env;

async function loadBD(){
    try {
        const dogsInfotApi = await axios.get(`${BASE_URL}?api_key=${API_KEY}`); 
        const temperamentsApi = dogsInfotApi.data.map(t => t.temperament); 
        let temperaments = temperamentsApi.map(e => e && e.split(",")).map(e => e && e.map(e2 => e2.trim())).filter(e => e !== undefined);
        temperaments = temperaments.reduce((acc, val) => acc.concat(val), []);
        temperaments = temperaments.filter((item,index)=> temperaments.indexOf(item) === index).sort();
        let temperamentesForBD = temperaments.map(t => { return { name: t } });
        await Temperament.bulkCreate(temperamentesForBD) ;
        await Temperament.findOrCreate({
            where: { name: 'None' }
        }) 
        //console.log(temperamentesForBD);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    loadBD
};