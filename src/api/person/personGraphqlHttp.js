const { graphqlHTTP } = require("express-graphql");
const root = require("./personRoot");
const schema = require("./personSchema");

const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.exports = graphqlMiddleware;
