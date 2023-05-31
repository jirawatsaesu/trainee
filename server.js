const express = require("express");
const { district, province } = require("./src/api");

const app = express();

app.use("/district", district.districtGraphqlHttp);
app.use("/province", province.provinceGraphqlHttp);

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
