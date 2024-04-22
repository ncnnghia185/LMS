const Project = require("../models/projectModel");
const slugify = require("slugify");

// Post new project
const postNewProject = async (data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing required data to create new project");
  if (data.title) data.slug = slugify(data.title);
  const project = await Project.create(data);
  return project;
};

// Get a project
const getAProject = async (slug) => {
  const project = await Project.findOne(slug);
  if (!project) throw new Error("This project does not exist");
  return project;
};

// Get all projects
const getAllProjects = async () => {
  const projects = await Project.find();
  return projects;
};

// Update project
const updateProject = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to update project");
  if (data.title) data.slug = slugify(data.title);
  const project = await Project.findByIdAndUpdate(id, data, { new: true });
  return project;
};

// Delete a project
const deleteProject = async (id) => {
  const project = await Project.findByIdAndDelete(id);
  return project;
};
module.exports = {
  postNewProject,
  getAProject,
  getAllProjects,
  updateProject,
  deleteProject,
};
