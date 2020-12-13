import { gql } from "apollo-server";

const typeDefs = gql`
  type Question {
    id: ID!
    isMultiChoices: Boolean
    questionText: String
    answers: [Answer]
  }

  input QuestionInput {
    isMultiChoices: Boolean
    questionText: String
    answers: [AnswerInput]
  }

  input AnswerInput {
    answerText: String
    isCorrect: Boolean
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

  type Mutation {
    addQuestion(input: QuestionInput): Question!
    updateQuestion(id: ID, input: QuestionInput): Question
    updateAnswer(id: ID, input: AnswerInput): Answer!
    removeQuestion(id: ID): Boolean
  }
`;

export default typeDefs;
