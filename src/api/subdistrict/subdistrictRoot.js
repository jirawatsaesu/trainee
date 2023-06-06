const subdistricts = require("./subdistrictData");

const root = {
  subdistrict: ({ amphure_id }) => {
    const filteredSubdistrict = subdistricts.filter(
      (e) => e.amphure_id === amphure_id
    );
    return filteredSubdistrict;
  },
};

module.exports = root;
