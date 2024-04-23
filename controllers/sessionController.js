const sessionServices = require("../services/sessionServices");

// Create a new session
const createSession = async (req, res) => {
  try {
    const session = await sessionServices.postSession(req.body);
    return res.status(200).json({
      success: true,
      message: "Create new session successfully",
      data: session,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error create new session",
      error: error.message,
    });
  }
};

// Get a session
const getASession = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await sessionServices.getSession(id);
    return res.status(200).json({
      success: true,
      message: "Fetch session successfully",
      data: session,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch session",
      error: error.message,
    });
  }
};
// Get all sessions
const getAllSessions = async (req, res) => {
  try {
    const sessions = await sessionServices.getSessions();
    return res.status(200).json({
      success: true,
      message: "Fetch all sessions successfully",
      data: sessions,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch all sessions",
      error: error.message,
    });
  }
};
// Update a session
const updateASession = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await sessionServices.updateSession(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Update session successfully",
      data: session,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error update session",
      error: error.message,
    });
  }
};
// Delete a session
const deleteASession = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await sessionServices.deleteSession(id);
    return res.status(200).json({
      success: true,
      message: "Delete session successfully",
      data: session,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error delete session",
      error: error.message,
    });
  }
};
module.exports = {
  createSession,
  getASession,
  getAllSessions,
  updateASession,
  deleteASession,
};
