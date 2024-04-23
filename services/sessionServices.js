const Sessions = require("../models/sessionsModel");

// Post new session
const postSession = async (data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing required data to create new session");
  const session = await Sessions.create(data);
  return session;
};

// Get a session
const getSession = async (id) => {
  const session = await Sessions.findById(id);
  if (!session) throw new Error("This session does not exist");
  return session;
};

// Get all sessions
const getSessions = async () => {
  const sessions = await Sessions.find();
  return sessions;
};

// Update session
const updateSession = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing required data to udpate session");
  const session = await Sessions.findByIdAndUpdate(id, data, { new: true });
  return session;
};

// Delete a session
const deleteSession = async (id) => {
  const session = await Sessions.findByIdAndDelete(id);
  return session;
};

module.exports = {
  postSession,
  getSession,
  getSessions,
  updateSession,
  deleteSession,
};
