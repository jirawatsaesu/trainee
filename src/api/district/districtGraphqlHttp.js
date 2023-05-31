const { graphqlHTTP } = require("express-graphql");
const root = require("./districtRoot");
const schema = require("./districtSchema");

const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.exports = graphqlMiddleware;
