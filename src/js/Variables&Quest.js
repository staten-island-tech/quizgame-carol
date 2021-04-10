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

// export { myQuestions };

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
