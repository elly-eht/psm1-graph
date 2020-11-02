import { gql } from "apollo-server";

const typeDefs = gql`
  type Question {
    id: ID!
    type: String
    questionText: String
    answers: [Answer]
  }

  type Answer {
    id: ID!
    answerText: String
    isCorrect: Boolean
  }

  type Query {
    questions: [Question]
    question(id: ID!): Question
  }
`;

export default typeDefs;
