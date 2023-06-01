const provinces = require("./provinceData");

const root = {
  province: ({ name }) => {
    if (name === null) {
      return provinces;
    } else {
      const province = provinces.filter(
        (e) =>
          e.name_th.includes(name) === true || e.name_en.includes(name) === true
      );
      return province;
    }
  },
};

module.exports = root;
