const newLetterServices = require("../services/newsLetterServices");

// Subcribe
const subcribe = async (req, res) => {
  try {
    const subcribe = await newLetterServices.subcribe(req.body);
    return res.status(200).json({
      success: true,
      message: "Subcribe successfully",
      data: subcribe,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Subcribe error",
      error: error.message,
    });
  }
};

// Unsubscribe
const unsubcribe = async (req, res) => {
  try {
    const { id } = req.params;
    const unsubcribe = await newLetterServices.unsubcribe(id);
    return res.status(200).json({
      success: true,
      message: "Unsubcribe successfully",
      data: unsubcribe,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unsubcribe error",
      error: error.message,
    });
  }
};

module.exports = {
  subcribe,
  unsubcribe,
};
