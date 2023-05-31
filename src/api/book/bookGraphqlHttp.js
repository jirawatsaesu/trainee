const { graphqlHTTP } = require("express-graphql");
const root = require("./bookRoot");
const schema = require("./bookSchema");

const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.exports = graphqlMiddleware;
