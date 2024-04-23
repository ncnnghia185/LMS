const Question = require("../../models/Question&Answer/questionModel");
const QNA = require("../../models/Question&Answer/qnaModel");
const qnaTag = require("../../models/Question&Answer/tagModel");
const Answer = require("../../models/Question&Answer/answerModel");
const Comment = require("../../models/Question&Answer/commentModel");
const slugify = require("slugify");
// Post question
const createQuestion = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to create a question");
  if (data.title) data.slug = slugify(data.title).toLowerCase();
  if (data.tags) {
    data.tags.forEach(async (item) => {
      const updateTagCount = await qnaTag.findByIdAndUpdate(
        element,
        {
          $inc: { totalques: +1 },
        },
        { new: true }
      );
    });
  }
  const question = await Question.create(data);
  const postQuestion = await QNA.create({
    user: id,
    slug: data.slug,
    question: question?._id,
  });
  return question;
};

// Get a question
const getQuestion = async (slug) => {
  const question = await QNA.findOne({ slug: slug }).populate(
    "question answer"
  );
  if (!question) throw new Error("This question not exist");
  return question;
};

// Get all questions
const getQuestions = async () => {
  const questions = await QNA.find().populate("question answer");
  return questions;
};

// Update question
const updateQuestion = async (id, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to update a question");
  if (data.title) data.slug = slugify(data.title).toLowerCase();
  const question = await Question.findByIdAndUpdate(id, data, {
    new: true,
  });
  return question;
};
// Delete quetion
const deleteQuestion = async (qaid, qid, aid) => {
  const deletedQuestion = await Question.findByIdAndDelete(qid);
  const deletedQNA = await QNA.findByIdAndDelete(qaid);
  if (aid && (aid !== "null" || aid !== "undifined" || aid !== ""))
    await Answer.findByIdAndDelete(aid);
  return deletedQuestion;
};

// Post answer
const createAnswer = async (qaid, uid, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to create a answer");
  const answerData = {
    user: uid,
    ...data,
  };
  const answer = await Answer.create(answerData);
  const postQuestion = await QNA.findByIdAndUpdate(
    qaid,
    { answer: answer?._id },
    { new: true }
  );
  return answer;
};

// Update answer
const updateAnswer = async (aid, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to update a answer");
  const updatedAnswer = await Answer.findByIdAndUpdate(aid, data, {
    new: true,
  });
  return updatedAnswer;
};

// Create comment
const createComment = async (qid, uid, data) => {
  if (Object.keys(data).length === 0)
    throw new Error("Missing data to create a question");

  const newComment = await Comment.create({
    user: uid,
    comment: data,
  });
  const question = await Question.findByIdAndUpdate(
    qid,
    {
      $push: { comments: newComment._id },
    },
    { new: true }
  );
  return question;
};

// Delete comment
const deleteComment = async (qId, cId) => {
  const comment = await Comment.findById(cId);

  const queComment = await Question.findByIdAndUpdate(
    qId,
    {
      $pull: {
        comments: comment._id,
      },
    },
    { new: true }
  );

  const deletedComment = await qnaTag.findByIdAndDelete(cId);
  return deletedComment;
};
module.exports = {
  createQuestion,
  getQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion,
  createAnswer,
  updateAnswer,
  createComment,
  deleteComment,
};
