const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const typeDefs  = require('./schema.js')
const resolvers = require('./resolvers.js');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    logger: console,
    debug: true
  });
  
  async function startServer() {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 }
    });
  
    console.log(`Server ready at: ${url}`);
  }
  
  startServer();