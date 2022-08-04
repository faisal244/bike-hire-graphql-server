const { Bike } = require("../models");

const bikes = async () => {
	const bikes = await Bike.find({});

	return bikes;
};

module.exports = bikes;
