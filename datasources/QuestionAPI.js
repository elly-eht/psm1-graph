import { MongoDataSource } from "apollo-datasource-mongodb";
import Mongoose from "mongoose";
export default class QuestionAPI extends MongoDataSource {
  getQuestions() {
    const questions = this.model.find();
    console.log(questions);
    return questions;
  }

  getQuestion(questionId) {
    const vale = this.model.findById(Mongoose.Types.ObjectId(questionId));
    console.log(typeof vale);
    console.log(vale);
    console.log(vale.answers);
    return vale;
  }
}
