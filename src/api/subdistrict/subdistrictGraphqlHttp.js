const { graphqlHTTP } = require("express-graphql");
const root = require("./subdistrictRoot");
const schema = require("./subdistrictSchema");

const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.exports = graphqlMiddleware;
