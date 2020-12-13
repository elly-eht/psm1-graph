import { MongoDataSource } from "apollo-datasource-mongodb";
import Mongoose from "mongoose";
export default class QuestionAPI extends MongoDataSource {
  getQuestions() {
    return this.model.find();
  }

  getQuestion(questionId) {
    return this.model.findById(Mongoose.Types.ObjectId(questionId));
  }

  updateQuestion1(id, input) {
    const question = this.model.findByIdAndUpdate(id, input, {
      new: true,
      upsert: true,
    });
    return question;
  }

  deleteQuestion(id) {
    this.model.findOneAndDelete(id);
    return true;
  }
}
