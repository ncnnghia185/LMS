const projectServices = require("../services/projectServices");

// Create a new project
const createNewProject = async (req, res) => {
  try {
    const project = await projectServices.postNewProject(req.body);
    return res.status(200).json({
      success: true,
      message: "Create new project successfully",
      data: project,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error create new project",
      error: error.message,
    });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await projectServices.getAllProjects();
    return res.status(200).json({
      success: true,
      message: "Fetch all projects successfully",
      data: projects,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch all projects",
      error: error.message,
    });
  }
};

// get a project
const getAProject = async (req, res) => {
  try {
    const { slug } = req.params;
    const project = await projectServices.getAProject(slug);
    return res.status(200).json({
      success: true,
      message: "Fetch  project successfully",
      data: project,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error fetch project",
      error: error.message,
    });
  }
};

// Update project
const updateAProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectServices.updateProject(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Update project successfully",
      data: project,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error update project",
      error: error.message,
    });
  }
};

// Delete project
const deleteAProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectServices.deleteProject(id);
    return res.status(200).json({
      success: true,
      message: "Delete project successfully",
      data: project,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error delete project",
      error: error.message,
    });
  }
};
module.exports = {
  createNewProject,
  getAllProjects,
  getAProject,
  updateAProject,
  deleteAProject,
};
