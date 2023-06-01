const districts = require("./districtData");

const root = {
  district: ({ name, province_id }) => {
    console.log("test glitch");
    const filteredDistrictbyProvince = districts.filter(
      (e) => e.province_id === province_id
    );
    if (name) {
      const district = filteredDistrictbyProvince.filter(
        (e) =>
          e.name_th.includes(name) === true || e.name_en.includes(name) === true
      );
      return district;
    } else {
      return filteredDistrictbyProvince;
    }
  },
};

module.exports = root;
