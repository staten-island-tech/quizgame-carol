console.log("connected");

const DOMSelectors = {
  quizContainer: document.querySelector(".quiz"),
  submitButton: document.getElementsByClassName("submitBtn"),
  resultContainer: document.querySelector("#result"),
  answer: document.querySelectorAll(".answer"),
  choiceA: document.getElementsByClassName("answerA"),
  choiceB: document.getElementsByClassName("answerB"),
  choiceC: document.getElementsByClassName("answerC"),
  choiceD: document.getElementsByClassName("answerD"),
};

function DOMSeleLoad() {
  console.log(`Loading "DOMSelectors"`);
  console.log(DOMSelectors);
  console.log(`"DOMSelectors" complete`);
}
DOMSeleLoad();

//Questions
const quizQuestions = [
  {
    question: "How are you?",
    a: "...",
    b: "Why should I answer?",
    c: "*You do not respond",
    d: "Good. how are you?",
    correct: "d",
  },
  {
    question:
      "Haha! I see you still have your spirit. I've been great! How's your family been?",
    a: "...",
    b: "*You do not respond",
    c: "*You try to remember this kind stranger",
    d: "Eh. Could've been better.",
    correct: "d",
  },
  {
    question:
      "Don't be such a downer now. Gotta keep the spirits up in the household. By the way, how's the kids?",
    a: "Huh?",
    b: "They've been great!",
    c: "*Should I be concerned?",
    d: "...",
    correct: "b",
  },
  {
    question:
      "Great to hear! Anyways, gotta run. I'm almost late for my job. See you at 5. Your place, alright?",
    a: "Hold up. Who are you?",
    b: "Sure, see you later!",
    c: "*The Stranger seems to know where I live... But who is this stranger?",
    d:
      "Huh? First, a family. Then KIDS?! Then MY ADDRESS! You're not making any sense?",
    correct: "b",
  },
];

///Load Questions on screen
const quiz = function () {
  quizQuestions.forEach(
    (item) =>
      DOMSelectors.quizContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="quizBox">
      <h1 class="question"> ${item.question} </h1>
      <p class="answer answerA"> ${item.a} </p>
      <p class="answer answerB"> ${item.b} </p>
      <p class="answer answerC"> ${item.c} </p>
      <p class="answer answerD"> ${item.d} </p> </div>`
      ),
    console.log(`function "quiz" is running.`)
  );
};
quiz();

//Variables
let score = 0;
let self = this;

//Adds event listener for clcks on answers I believe
let userAnswers = [];
let currentQuestion = {};
let acceptingAnswers = true;

//////// Unable to determine if successful - scratching for now
// let inputs = document.getElementsByClassName("answer");
// for (let i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener("click", check);
// }
/////////

/// If all questions are answered

//////// Does Note Work - Unable to track if all wuestions have been answered
// function check() {
//   userAnswers = [];
//   let questionAnswered = 0;
//   for (let i = 0; i < inputs.length; i++) {
//     if (inputs[i].checked) {
//       userAnswers.push(i % 3);
//       questionAnswered++;
//     }
//   }
//   if (questionAnswered == quizQuestions.length) finalAnswer();

//   console.log(`function "check" is running`);
// }

// function finalAnswer() {
//   console.log(`Function "check" and "finalAnswer" runned`);
// }
////////

//Mark which answer choice was chosen - correct or not

//Add points if the answer chosen is correct (activated/used whent he submit btn is pressed)

//Show results at the bottom of the page of the total among of questions correct - followed by a short text
