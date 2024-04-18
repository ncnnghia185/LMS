const Blog = require("../models/blogModel");
const slugify = require("slugify");
// Create new blog
const newBlog = async (data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to create new blog");
  if (data.title) data.slug = slugify(data.title);
  const blog = await Blog.create(data);
  return blog;
};

// Get all blogs
const allBlogs = async () => {
  const blogs = await Blog.find();
  return blogs;
};

// Get a blog
const aBlog = async (slug) => {
  const blog = await Blog.findOne({ slug: slug });
  if (!blog) throw new Error("No blog found");
  return blog;
};

// Update blog
const updateBlog = async (id, data) => {
  if (Object.keys(data).length === 0) throw new Error("Missing data to update");
  if (data.title) data.slug = slugify(data.title);
  const blog = await Blog.findByIdAndUpdate(id, data, { new: true });
  return blog;
};

// Delete blog
const deleteBlog = async (id) => {
  const blog = await Blog.findByIdAndDelete(id);
  return blog;
};
module.exports = {
  newBlog,
  allBlogs,
  aBlog,
  updateBlog,
  deleteBlog,
};
