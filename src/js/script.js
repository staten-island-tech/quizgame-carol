console.log("connected");

//Questions
const quizQuestions = [
  {
    question: "Good Morning!",
    a: "Good Morning!",
    b: "Good Morning",
    c: "*You stare at the stranger",
    d: "Good Morning",
    correct: { a, b, d },
  },
  {
    question: "How are you?",
    a: "...",
    b: "Why should I answer?",
    c: "*You do not respond",
    d: "Good. how are you?",
    correct: d,
  },
  {
    question:
      "Haha! I see you still have your spirit. I've been great! How's your family been?",
    a: "...",
    b: "*You do not respond",
    c: "*You try to remember this kind stranger",
    d: "Eh. Could've been better.",
    correct: d,
  },
  {
    question:
      "Don't be such a downer now. Gotta keep the spirits up in the household. By the way, how's the kids?",
    a: "Huh?",
    b: "They've been great!",
    c: "*Should I be concerned?",
    d: "...",
    correct: b,
  },
  {
    question:
      "Great to hear! Anyways, gotta run. I'm almost late for my job. Let's meet again some time soon alright!",
    a: "Hold up. Who are you?",
    b: "Sure, see you later!",
    c: "*The Stranger seems to know where I live... But who is this stranger?",
    d: "Huh? First, a family. Then KIDS?! Then MY ADDRESS! Who are you?!",
    correct: b,
  },
];

//Grab the HTML (DOM)


//Set Score Values
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const scorePt = 1;

//If Answers are Right/Wrong Functions
startGame = () => {
  questionCounter = 0;
  score = 0;
  if question
};

//Result
