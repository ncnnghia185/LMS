const contactServices = require("../services/contactServices");

// Create new contact
const createNewContact = async (req, res) => {
  try {
    const contact = await contactServices.createContact(req.body);
    return res.status(200).json({
      success: true,
      message: " Contact created successfully",
      data: contact,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Create contact failed",
      error: error.message,
    });
  }
};

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactServices.allContacts();
    return res.status(200).json({
      success: true,
      message: " Fetched all contatcs successfully",
      data: contacts,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Fetched all contacts failed",
      error: error.message,
    });
  }
};

// Get a contact
const getAContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await contactServices.aContact(id);
    return res.status(200).json({
      success: true,
      message: " Fetched contact successfully",
      data: contact,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Fetched contact failed",
      error: error.message,
    });
  }
};

// Change contact status
const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await contactServices.updateContact(id, req.body);
    return res.status(200).json({
      success: true,
      message: " Change contact status successfully",
      data: contact,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Change contact status failed",
      error: error.message,
    });
  }
};

// Delete contact
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await contactServices.deleteContact(id);
    return res.status(200).json({
      success: true,
      message: " Delete contact successfully",
      data: contact,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Delete contact failed",
      error: error.message,
    });
  }
};
module.exports = {
  createNewContact,
  getAllContacts,
  getAContact,
  updateContactStatus,
  deleteContact,
};
