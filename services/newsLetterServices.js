const newLetter = require("../models/newsLetterModel");

// Subcribe
const subcribe = async (data) => {
  const newSubcribe = await newLetter.create(data);
  return newSubcribe;
};

// Unsubcribe
const unsubcribe = async (id) => {
  const deleteSubcribe = await newLetter.findByIdAndDelete(id);
  return deleteSubcribe;
};

module.exports = {
  subcribe,
  unsubcribe,
};
