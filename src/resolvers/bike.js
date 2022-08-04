const { Bike } = require("../models");

const bike = async (_, { bikeId }) => {
	const bike = await Bike.findById(bikeId);

	return bike;
};

module.exports = bike;
