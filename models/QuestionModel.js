import mongoose from "mongoose";

const answer = new mongoose.Schema({
  answerText: String,
  isCorrect: Boolean,
});

const question = new mongoose.Schema({
  questionText: String,
  isMultiChoices: Boolean,
  answers: [
    {
      answerText: String,
      isCorrect: Boolean,
    },
  ],
});

const QuestionModel = mongoose.model("Question", question);
export default QuestionModel;
