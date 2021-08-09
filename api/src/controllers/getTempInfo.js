require('dotenv').config();
const { Temperament } = require('../db');
const axios = require('axios');
const { BASE_URL } = require('../../constants');
const { API_KEY } = process.env;

async function getTempInfo(_req,res,next){
    try {
        //obtenemos toda la inforamcion de la api de DOGS
        const dogsInfotApi = await axios.get(`${BASE_URL}?api_key=${API_KEY}`); 
        //guardamos en una variable la informacion de temperamentos
        const temperamentsApi = dogsInfotApi.data.map(t => t.temperament); 
    
        //temperaments sera un array de strings, donde cada string seran varios temperamentos de cada perro
        //console.log("1", temperamentsApi)
        //creamos una variable "temperaments" que guardara un array de arrays, que dentro de cada sub array contendra los temperamentos de cada perro
        //adicionalmente se recorrera cada sub array para eliminar los espacios en blanco de cada string
        //se filtrara para no tener sub array de tipo "undefined"
        let temperaments = temperamentsApi.map(e => e && e.split(",")).map(e => e && e.map(e2 => e2.trim())).filter(e => e !== undefined);
        //la variable "temperaments", pasara de ser un array de arrays, a un array que contendra los strings de temperamentos de todos los perros, en esta array existirana valores duplicados
        temperaments = temperaments.reduce((acc, val) => acc.concat(val), []);
        //se elimininaran los valores duplicados en la variable "temperaments"
        temperaments = temperaments.filter((item,index)=> temperaments.indexOf(item) === index).sort();
        //console.table(temperaments);
        let temperamentesForBD = temperaments.map(t => { return { name: t } });
        //console.log("3",temperamentesForBD);
        await Temperament.bulkCreate(temperamentesForBD) ;
        return res.json(temperamentesForBD);
        
    } catch (error) {
        next(error);
    }
}

module.exports = {
	getTempInfo
};
