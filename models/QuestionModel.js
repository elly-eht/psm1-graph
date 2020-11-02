import mongoose from "mongoose";

const answer = new mongoose.Schema({
  answerText: String,
  isCorrect: Boolean,
});

const question = new mongoose.Schema({
  questionText: String,
  type: { type: String },
  answers: [
    {
      answerText: String,
      isCorrect: Boolean,
    },
  ],
});

const QuestionModel = mongoose.model("Question", question);
export default QuestionModel;
