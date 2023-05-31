const persons = require("./personData");

const root = {
  person: ({ id }) => {
    const person = persons.find((p) => p.id === id);
    return person;
  },
};

module.exports = root;
