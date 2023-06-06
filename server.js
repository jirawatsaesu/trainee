const express = require("express");
const { district, province, subdistrict } = require("./src/api");

const app = express();

app.use("/subdistrict", subdistrict.subdistrictGraphqlHttp);
app.use("/district", district.districtGraphqlHttp);
app.use("/province", province.provinceGraphqlHttp);

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
