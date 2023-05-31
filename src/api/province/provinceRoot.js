const provinces = require("./provinceData");

const root = {
  province: ({ id }) => {
    const province = provinces.find((b) => b.id === id);
    return province;
  },
};

module.exports = root;
