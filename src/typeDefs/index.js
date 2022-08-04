const { gql } = require("apollo-server");

const typeDefs = gql`
	type Specifications {
		frameSize: Float
		wheelSize: Float
		colour: String
		hasGears: Boolean
		numberOfGears: Int
	}

	type Address {
		addressLine1: String!
		addressLine2: String
		city: String!
		postcode: String!
	}

	type Bike {
		category: String!
		model: String!
		brand: String!
		imageUrl: String!
		dailyPrice: Float!
		weeklyPrice: Float!
		specifications: Specifications
	}

	type Booking {
		startDate: String!
		endDate: String!
		isDaily: Boolean!
		isWeekly: Boolean!
		totalCost: Float!
		pickupLocation: Address
		bike: Bike
	}

	type Query {
		bikes: [Bike]
		bike(bikeId: ID!): Bike
		bookings: [Booking]
		booking(bookingId: ID!): Booking
	}
`;

module.exports = typeDefs;
