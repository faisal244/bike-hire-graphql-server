const bikes = require("./bikes");
const bike = require("./bike");

const resolvers = {
	Query: {
		bikes,
		bike,
		// bookings,
		// booking,
	},
};

module.exports = resolvers;
