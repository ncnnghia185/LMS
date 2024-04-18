const Contact = require("../models/contactModel");

// Creata new contact
const createContact = async (data) => {
  const contact = await Contact.create(data);
  return contact;
};

// Get all contact
const allContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
};

// Get a contact
const aContact = async (id) => {
  const contact = await Contact.findById(id);
  if (!contact) throw new Error("Couldn't find contact");
  return contact;
};

// Update contact status
const updateContact = async (id, data) => {
  const contact = await Contact.findByIdAndUpdate(
    id,
    { status: data.status },
    { new: true }
  );
  if (!contact) throw new Error("Couldn't update contact");
  return contact;
};

// Delete contact
const deleteContact = async (id) => {
  const contact = await Contact.findByIdAndDelete(id);
  return contact;
};

module.exports = {
  createContact,
  allContacts,
  aContact,
  updateContact,
  deleteContact,
};
