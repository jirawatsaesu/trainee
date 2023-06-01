const provinces = require("./provinceData");

const root = {
  province: ({ name }) => {
    if (name === null) {
      return provinces;
    } else {
      const province = provinces.filter(
        (p) =>
          p.name_th.includes(name) === true || p.name_en.includes(name) === true
      );
      return province;
    }
  },
};

module.exports = root;
