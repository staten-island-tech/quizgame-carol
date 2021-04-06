////one function
(function () {
  ///function name
  function buildQuiz() {
    // a place to store outputs (HTML) codes
    const output = [];

    // Questions
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // list of answers
      const answers = [];

      // for each answer choice
      for (letter in currentQuestion.answers) {
        // push --> adds element (or HTML in this case)
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }

      // Adds the question and answers to the output (to be seen on screen I believe)
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
      );
    }); ///Questions end

    // Combines output list into one string of HTML - shows on screen
    quizContainer.innerHTML = output.join("");
  }

  ///Score Results code
  function showResults() {
    // selects the answers container in myQuestions
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // used to keep track of scores
    let numCorrect = 0;

    // for each question listed
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber]; //Finds question
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add 1 to the # of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total - adds HTML to results
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  ///Question List
  const myQuestions = [
    {
      question: "Where did Apple Pie originate from?",
      answers: {
        a: "Pie?",
        b: "America",
        c: "England",
      },
      correctAnswer: "c",
    },

    {
      question: "What is the national animal of Scotland?",
      answers: {
        a: "Horse",
        b: "Lion",
        c: "Unicorn",
      },
      correctAnswer: "c",
    },

    {
      question: "Knock. Knock.",
      answers: {
        a: "Who's there?",
        b: "Shh. You don't wanna scare them.",
        c: "... Imma open the door.",
      },
      correctAnswer: "b",
    },

    {
      question: "What a group of bunnies called?",
      answers: {
        a: "Bun",
        b: "Herd",
        c: "Fluffle",
      },
      correctAnswer: "c",
    },
  ];

  // starts function
  buildQuiz();

  // Event listeners - on click for Submit btn which runs the function to show results
  submitButton.addEventListener("click", showResults);
})();
