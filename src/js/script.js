//import { myQuestions } from "./Variables&Quest";

(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        /// .push --> adds HTML
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output

      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "goldenrod";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "#279";
      }
    });

    ///Response/Result based on the Number of Correct Answers
    if (numCorrect >= 3) {
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} 
      *The conversation went well. It appears that you've greeted an old friend.... Do you remember who they are?`;
    } else {
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}       
      *You felt a chill down your spine. The tension in the air seems to have risen. It seems a stranger has mistaken you for a friend. You tried to play along.`;
    }
    if (numCorrect == 0) {
      resultsContainer.innerHTML = `*The stranger appears confused by your response. Perhaps they've realized that you aren't a familiar friend.`;
    }
  }

  function showSlide(n) {
    ///adds the class 'active-slide" for the question/slide to be visible
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n; ////both variables are equal - currentSlide is also equal to 0 (used to start off the function)

    ///allows the previousBtn to be shown when the slide count is over 0
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    //allows the submitBtn to be shown on the last slide and for the NextBtn to be inactivated
    if (currentSlide === slides.length - 1) {
      ///// .style - adds CSS code, varies depending on what the following element is
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  ///Adds or Subtract the number of slides depending on which Btn is pressed
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables - cannot import properly - questions do not show up when placed in seperate file
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "How are you?",
      answers: {
        a: "...",
        b: "*Should I answer the stranger?",
        c: "Good, how are you?",
      },
      correctAnswer: "c",
    },
    {
      question:
        "Haha! I see you still have your spirit. I've been great! How's your family been?",
      answers: {
        a: "...",
        b: "*You do not respond",
        c: "*You try to remember this kind stranger",
        d: "Eh. Could've been better.",
      },
      correctAnswer: "d",
    },
    {
      question:
        "Don't be such a downer now. Gotta keep the spirits up in the household. By the way, how's the kids?",
      answers: {
        a: "Huh?",
        b: "They've been great!",
        c: "*Should I be concerned?",
        d: "...",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Great to hear! Anyways, gotta run. I'm almost late for my job. See you at 5. Your place, alright?",
      answers: {
        a: "Hold up. Who are you?",
        b: "Sure, see you later!",
        c:
          "*The Stranger seems to know where I live... But who is this stranger?",
      },
      correctAnswer: "b",
    },
  ];
  ///Start the Quiz function
  buildQuiz();

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners for different stuff and each runs a different function
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
