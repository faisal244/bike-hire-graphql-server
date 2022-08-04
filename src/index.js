require("dotenv").config();

const { ApolloServer } = require("apollo-server");

const connectToDatabase = require("./config/connection");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const PORT = process.env.PORT || 4000;

const init = async () => {
	try {
		// establish a connection with database
		await connectToDatabase();

		// create a graphQL server
		const server = new ApolloServer({
			typeDefs,
			resolvers,
		});

		// start your graphQL server
		const { url } = await server.listen(PORT);
		console.log(`Server running on ${url}`);
	} catch (error) {
		console.log(`[ERROR]: Failed to start server | ${error.message}`);
	}
};

init();
