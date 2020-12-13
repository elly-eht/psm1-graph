const questionSeeds = [
  {
    questionText:
      "Which output from Sprint Planning provides the Development Team with a target and overarching direction for the Sprint?",
    isMultiChoices: false,
    answers: [
      { answerText: "Sprint review minutes", isCorrect: false },
      { answerText: "The release plan", isCorrect: false },
      { answerText: "The Sprint goal", isCorrect: true },
      { answerText: "The Sprint Backlog", isCorrect: false },
    ],
  },
  {
    questionText: "Which should not take place at the daily scrum?",
    isMultiChoices: false,
    answers: [
      { answerText: "Issues are raised and documented", isCorrect: false },
      {
        answerText: "The Development team answers the three questions",
        isCorrect: false,
      },
      { answerText: "The Product Owner gives an update", isCorrect: true },
      {
        answerText: "The scrum master manages the timebox",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Which two activities will a Product Owner engage during a Sprint",
    isMultiChoices: true,
    answers: [
      { answerText: "Update the burndown chart", isCorrect: false },
      {
        answerText:
          "Answer questions from the Development team about items in the current sprint",
        isCorrect: true,
      },
      { answerText: "Run the daily scrum", isCorrect: false },
      {
        answerText: "Work with the stakeholders",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "BALABLA",
    isMultiChoices: true,
    answers: [
      { answerText: "Update the burndown chart", isCorrect: false },
      {
        answerText:
          "Answer questions from the Development team about items in the current sprint",
        isCorrect: true,
      },
      { answerText: "Run the daily scrum", isCorrect: false },
      {
        answerText: "Work with the stakeholders",
        isCorrect: true,
      },
    ],
  },
];

export default questionSeeds;
