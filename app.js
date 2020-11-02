import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server";

import QuestionModel from "./models/QuestionModel.js";
import QuestionAPI from "./datasources/QuestionAPI.js";
import typeDefs from "./schema.js";

mongoose.connect("mongodb://localhost/psm1", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we are connected");
});

const resolvers = {
  Query: {
    questions: (_, __, { dataSources }) => {
      return dataSources.questionAPI.getQuestions();
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
