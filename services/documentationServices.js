const Documentation = require("../models/documentationModel");
const slugify = require("slugify");
// Create new doc
const createDoc = async (data) => {
  if (data.title) data.slug = slugify(data.title).toLowerCase();
  const doc = await Documentation.create(data);
  return doc;
};

// Get a doc
const getDoc = async (slug) => {
  const doc = await Documentation.findOne({ slug: slug });
  if (!doc) throw new Error("This documentation not exists");
  return doc;
};

// Get all docs
const getDocs = async () => {
  const docs = await Documentation.find();
  return docs;
};

// Update doc
const updateDoc = async (id, data) => {
  if (Object.keys(data).length === 0) throw new Error("Missing update values");
  if (data.title) data.slug = slugify(data.title).toLowerCase();
  const doc = await Documentation.findByIdAndUpdate(id, data, { new: true });
  if (!doc) throw new Error("This documentation not exists");
  return doc;
};

// Delete doc
const deleteDoc = async (id) => {
  const doc = await Documentation.findByIdAndDelete(id);
  return doc;
};

module.exports = {
  createDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
};
