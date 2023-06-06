const { buildSchema } = require("graphql");
const fs = require("fs");
const path = require("path");

const schemaPath = path.join(__dirname, "subdistrictSchema.graphql");
const schemaString = fs.readFileSync(schemaPath, "utf-8");
const schema = buildSchema(schemaString);

module.exports = schema;
