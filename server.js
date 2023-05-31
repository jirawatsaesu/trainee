const express = require("express");
const { person, province } = require("./src/api");

const app = express();

app.use("/person", person.personGraphqlHttp);
app.use("/province", province.provinceGraphqlHttp);

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
