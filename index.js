/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Questions {
    id: ID!
    description: String
    choices: [Choices]
    answers: [Choices]
  }

  type Choices {
    id: ID!
    description: String
  }

  type Query {
    questions: [Questions]
  }
`;

const questions = [
  {
    id: 1,
    description: "What is the recommended size of a Scrum Team ?",
    choices: ["3-9", "3-11", "7-11", "5-9"],
    answers: ["3-11"],
  },
  {
    id: 2,
    description: "The Product Owner must ship each Sprint increment",
    choices: [
      "When it makes sense",
      "Whenever the increment is free of defects",
      "Without exceptions",
      "To make sure the Development team is done every Sprint",
    ],
    answers: ["When it makes sense"],
  },
  {
    id: 3,
    description:
      "Stakeholders can interact with the Scrum Team in which two ways ?",
    choices: [
      "Via interaction with the Product Owner",
      "At the Sprint Review",
      "At the Sprint retrospective",
      "At the daily scrum",
    ],
    answers: ["Via interaction with the Product Owner", "At the Sprint Review"],
  },
];

const resolvers = {
  Query: {
    questions: () => questions,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
