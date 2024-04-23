const qnaTag = require("../../models/Question&Answer/tagModel");
const Question = require("../../models/Question&Answer/questionModel");
const slugify = require("slugify");
// Create a tag question
const postTagQuestion = async (qid, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to create tag question");
  if (data.title) data.slug = slugify(data.title);
  const tag = await qnaTag.create(data);
  const questionTag = await Question.findByIdAndUpdate(
    qid,
    {
      $push: {
        tags: tag._id,
      },
    },
    { new: true }
  );
  return tag;
};

// Update tag question
const updateTagQuestion = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to create tag question");
  if (data.title) data.slug = slugify(data.title);
  const tag = await qnaTag.findByIdAndUpdate(id, data, { new: true });

  return tag;
};

// Delete tag question
const deleteTagQuestion = async (qId, tId) => {
  const tag = await qnaTag.findById(tId);

  const queTag = await Question.findByIdAndUpdate(
    qId,
    {
      $pull: {
        tags: tag._id,
      },
    },
    { new: true }
  );

  const tagQue = await qnaTag.findByIdAndDelete(tId);
  return tagQue;
};

// Get a tag question
const getTagQuestion = async (slug) => {
  const tag = await qnaTag.findOne({ slug: slug });
  if (!tag) throw new Error("Tag not found");
  return tag;
};

// Get all tags quetion
const getTagsQuestion = async () => {
  const tags = await qnaTag.find();
  return tags;
};
module.exports = {
  postTagQuestion,
  updateTagQuestion,
  deleteTagQuestion,
  getTagQuestion,
  getTagsQuestion,
};
