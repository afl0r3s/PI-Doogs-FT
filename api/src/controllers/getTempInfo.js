require('dotenv').config();
const { Temperament } = require('../db');
const axios = require('axios');
const { BASE_URL } = require('../../constants');
const { API_KEY } = process.env;

async function getTempInfo(req,res,next){
    const dogsTemperamentApi = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
    const temperaments = dogsTemperamentApi.data.map(t => t.temperament)
    //console.log("1", temperaments)
    let temp = temperaments.map(e => e && e.split(",")).map(e => {
        if(e !== undefined) return e.map(e2 => e2.trim())
    })
    //console.log("2", temp)
    let temp2 = temp.reduce((acc, val) => acc.concat(val), []);
    temp2 = temp2.filter((item,index)=>{
        return temp2.indexOf(item) === index;
      }).sort();
    temp2 = temp2.map(t => {
        return {
            name: t
        }
    })
    temp2.pop()
    console.table(temp2)
    await Temperament.bulkCreate(temp2) 
    return res.send('para que no se rompa')
}

/* 
function getTempInfo2(req, res, next) {
    const dogsTempLocal = Temperament.findAll();
	const dogsTempApi = axios.get(`${BASE_URL}?api_key=${API_KEY}`);
	Promise.all([dogsTempApi, dogsTempLocal])
		.then((response) => {
			let [dogsTempApiResponse, dogsTempLocalResponse] = response;
            let dogTemperaments = dogsTempApiResponse.data;
            dogTemperaments = dogTemperaments.map(dt => {
                return dt.temperament
            });
            
            console.log(dogTemperaments);
			//return res.send(dogsTempLocalResponse.concat(dogsTempApiResponse.data.temperament));
            return res.send(dogsTempLocalResponse)
		})
		.catch((err) => next(err));
}
 */

module.exports = {
	getTempInfo
};
