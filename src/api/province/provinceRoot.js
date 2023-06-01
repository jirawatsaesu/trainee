const provinces = require("./provinceData");

const root = {
  province: ({ name }) => {
    if (name) {
      const province = provinces.filter(
        (e) =>
          e.name_th.includes(name) === true || e.name_en.includes(name) === true
      );
      return province;
    } else {
      return provinces;
    }
  },
};

module.exports = root;
