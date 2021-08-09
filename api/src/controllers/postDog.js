const { Dog } = require('../db');
const { v4: uuidv4 } = require('uuid');

async function postDog(req, res, next) {
	//console.log('1)', req.body);
	try {
		const { name, height, weight, life_span, image, temperamentsArr } = req.body;
		let createdDog = await Dog.create({
			id: uuidv4(),
			name,
			height,
			weight,
			life_span,
			image,
		});

		await createdDog.addTemperament(temperamentsArr);
		res.json(createdDog);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	postDog,
};
