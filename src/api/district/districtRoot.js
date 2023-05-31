const districts = require("./districtData");

const root = {
  district: ({ id }) => {
    const district = districts.find((p) => p.id === id);
    return district;
  },
};

module.exports = root;
