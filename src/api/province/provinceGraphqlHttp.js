const { graphqlHTTP } = require("express-graphql");
const root = require("./provinceRoot");
const schema = require("./provinceSchema");

const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.exports = graphqlMiddleware;
