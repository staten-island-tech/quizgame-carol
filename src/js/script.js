///Goes into the document and grabs the element with the stated Id or Class
const question = document.getElementById("question");
const choice = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = 0;
let score = 3;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "You are in a hallway. The closet door appears to your right. Laughter to your left. What do you do? ",
    choice1: "Enter the closet.",
    choice2: "Follow the laughter.",
    choice1: "Stand Still And Wait.",
    answer: 1,
  },
  {
    question: "You entered the bedroom. Your brothers computer is unlocked and a game is currently running.",
    choice1: "Play the game.",
    choice2: "Climb into the wardrobe and close the door.",
    choice1: "Stare at the ceiling.",
    answer: 2,
  },
  {
    question: "Someone's outside the door. You hear them turning the knob.",
    choice1: "Stay still and quiet.",
    choice2: "Open the door for them.",
    choice1: "Scream.",
    answer: 1,
  },
  {
    question: "You smell something in the kitchen. Your mother appears to be cooking something.",
    choice1: "Enter the kitchen to get a closer look.",
    choice2: "Duck under the counter.",
    choice1: "Ask your mom what's for lunch.",
    answer: ,
  },
  {
    question: "The family dog appears to be sleeping in your hiding spot.",
    choice1: "Push the dog aside.",
    choice2: "Walk away and find another hiding spot.",
    choice1: "...Bad Doggy.",
    answer: ,
  },
  {
    question: "You were informed by your mother that you're class starts in 10 minutes.",
    choice1: "Sit still and wait it out.",
    choice2: "Abandon post to join class.",
    choice1: ' "I have class?" ',
    answer: 2,
  },
];

//Another way to write functions
startGame = () => {
  questionCounter = 0;
  score = 3;
  availableQuestions = [...questions]; ///copies the questions from the array
  console.log(availableQuestions);
  newQuestions();
};

newQuestions = () => {
  questionCounter++; ///adds 1 to the counter
  currentQuestion = availableQuestions;
  ///Math.floor () --> returns the largest integer of the given #
  Math.floor
};

startGame(); ///runs function
