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

export { myQuestions };

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
