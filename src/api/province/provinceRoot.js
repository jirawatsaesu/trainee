const provinces = require("./provinceData");

const root = {
  province: ({ name }) => {
    if (name) {
      const province = provinces.filter(
        (e) =>
          e.name_th.toLowerCase().includes(name.toLowerCase()) === true ||
          e.name_en.toLowerCase().includes(name.toLowerCase()) === true
      );
      return province;
    } else {
      return provinces;
    }
  },
};

module.exports = root;
