import { MongoDataSource } from "apollo-datasource-mongodb";

export default class QuestionAPI extends MongoDataSource {
  getQuestions() {
    return this.model.find();
  }
}
