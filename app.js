import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server";

import QuestionModel from "./models/QuestionModel.js";
import QuestionAPI from "./datasources/QuestionAPI.js";
import typeDefs from "./schema.js";
import questionSeeds from "./seeds/questions.js";

mongoose.connect("mongodb://localhost/psm1", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we are connected");
});
// await QuestionModel.remove();
// await QuestionModel.insertMany(questionSeeds);

const resolvers = {
  Query: {
    questions: (_, __, { dataSources }) => {
      return dataSources.questionAPI.getQuestions();
    },
    question: (_, { id }, { dataSources }) => {
      return dataSources.questionAPI.getQuestion(id);
    },
  },
  Mutation: {
    updateQuestion: async (_, { id, input }, { dataSources }) => {
      return dataSources.questionAPI.updateQuestion1(id, input);
    },
    removeQuestion: async (_, { id }, { dataSources }) => {
      return dataSources.questionAPI.deleteQuestion(id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    questionAPI: new QuestionAPI(QuestionModel),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
