const express = require("express");
const { person, book } = require("./src/api");

const app = express();

app.use("/person", person.personGraphqlHttp);
app.use("/book", book.bookGraphqlHttp);

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
