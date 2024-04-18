const documentationServices = require("../services/documentationServices");

// Create new documentation
const createDoc = async (req, res) => {
  try {
    const doc = await documentationServices.createDoc(req.body);
    return res.status(200).json({
      success: true,
      message: "Document created successfully",
      data: doc,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Create new doc failed",
      error: error.message,
    });
  }
};

// Get all documents
const getAllDocs = async (req, res) => {
  try {
    const docs = await documentationServices.getDocs();
    return res.status(200).json({
      success: true,
      message: "Fetched all documents successfully",
      data: docs,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Fetch all docs failed",
      error: error.message,
    });
  }
};

// Get a document
const getADoc = async (req, res) => {
  try {
    const { slug } = req.params;
    const doc = await documentationServices.getDoc(slug);
    return res.status(200).json({
      success: true,
      message: "Fetched document successfully",
      data: doc,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Fetch doc failed",
      error: error.message,
    });
  }
};

// Update a document
const updateDoc = async (req, res) => {
  try {
    const { id } = req.params;
    const updateDoc = await documentationServices.updateDoc(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Updated document successfully",
      data: updateDoc,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Update doc failed",
      error: error.message,
    });
  }
};

// Delete documet
const deleteDoc = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDoc = await documentationServices.deleteDoc(id);
    return res.status(200).json({
      success: true,
      message: "Deleted document successfully",
      data: deleteDoc,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Delete doc failed",
      error: error.message,
    });
  }
};
module.exports = {
  createDoc,
  getAllDocs,
  getADoc,
  updateDoc,
  deleteDoc,
};
