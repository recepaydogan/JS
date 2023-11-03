const barTop = document.querySelector(".bar-top");
const starterBtn = document.querySelector(".starter button");
const startBox = document.querySelector(".starter");
const info = document.querySelector(".info-box");
const quizBox = document.querySelector(".quiz-box");
const startQuizBtn = document.querySelector(".startQuiz");
const timeLeft = document.querySelector(".times-sec");
const nextQuestion = document.querySelector(".next-question");
const scoreText = document.querySelector(".score-text");
const resultBox = document.querySelector(".result-box");
const optionList = document.querySelector(".option-list");
const exitButton = document.querySelector(".exit-quiz");
const directedIn = document.querySelector(".directedIn");
let questionLength = questions.length;
let isAnswered = true;
let number = 0;
let numberLeft = 300;
let questionNumber = 0;
let userScore = 0;
let directedTime = 4;
let myInterval;

// Opens info page after the start button is clicked
starterBtn.addEventListener("click", () => {
  info.classList.add("active");
});

// closes info page and returns to the first page
exitButton.addEventListener("click", () => {
  exitButton.classList.add("btn-active");
  info.classList.remove("active");
  resultBox.classList.remove("active");
  startBox.classList.add("active");
});

// opens quiz page and shows the questions and options
startQuizBtn.addEventListener("click", () => {
  quizBox.classList.add("active");
  info.classList.remove("active");
  startCounting();
  showQuestion(questionNumber);
});

// Assign all the questions, options, question numbers etc.
function showQuestion(index) {
  // get datas from question.js file.
  const questionTxt = document.querySelector(".question-txt");
  const questionCounter = document.querySelector(".question-counter");
  questionTxt.textContent = `${questions[index].numb} - ${questions[index].question}`;
  questionCounter.textContent = `${questions[index].numb}. of ${questionLength} Questions`;
  // create icons for correct and wrong answers.
  let correctIconTag = `<i class="fa-solid correct-icon fa-check"></i>`;
  let wrongIconTag = `<i class="fa-solid wrong-icon fa-xmark"></i>`;
  // Create options with the datas from question.js
  let optionTag = `
  <div class="option"><p>${questions[index].options[0]}</p> </div>
  <div class="option"><p>${questions[index].options[1]}</p> </div>
  <div class="option"><p>${questions[index].options[2]}</p> </div>
  <div class="option"><p>${questions[index].options[3]}</p> </div>
  `;

  // Put all options in optionlist element
  optionList.innerHTML = optionTag;

  // get Option element
  let options = optionList.querySelectorAll(".option");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      isAnswered = false; // Assing it false to stop counting back.
      nextQuestion.classList.add("btn-active"); // Activate it to go to the next question.
      const optionsLength = optionList.children.length;
      let correctAns = questions[index].answer;
      disabledButton(optionList, optionsLength); // Disable buttons to prevent them from being clicked again.
      if (option.children[0].textContent == correctAns) {
        option.classList.add("correct");
        option.innerHTML += correctIconTag; // Add tick icon to the correct option.
        userScore++; // Increase user score 1 for correct answers.
      } else {
        option.classList.add("wrong");
        option.innerHTML += wrongIconTag; // Add x mark icon the correct option.
        for (let i = 0; i < optionsLength; i++) {
          if (optionList.children[i].children[0].textContent == correctAns) {
            optionList.children[i].classList.add("correct");
            optionList.children[i].innerHTML += correctIconTag; // If the wrong answer is selected, we still show the correct answer here.
          }
        }
      }
    });
  });
}

// start the countdown timer as soon as the question is seen.
function startCounting() {
  barTop.style.width = number / 3 + "%";
  timeLeft.textContent = Math.round(numberLeft / 20);
  number++;
  if (isAnswered && number < 301) {
    setTimeout(startCounting, 50);
    numberLeft--;
  }

  // if the number is over 300, make options not clickable
  if (number === 300) {
    disabledButton(optionList, optionList.children.length);
    nextQuestion.classList.add("btn-active");
  }
}

// Reset variables after go to the next question
nextQuestion.addEventListener("click", () => {
  number = 0;
  numberLeft = 300;
  isAnswered = true;
  questionNumber++;
  nextQuestion.classList.remove("btn-active");
  // if last questin is answered, it directs user to the result page.
  if (questionNumber > questionLength - 1) {
    quizBox.classList.remove("active");
    resultBox.classList.add("active");
    showResult();

    return;
  }
  showQuestion(questionNumber);
  startCounting();
});

// a function to disabled the options
function disabledButton(parent, childLength) {
  for (let i = 0; i < childLength; i++) {
    parent.children[i].style.pointerEvents = "none";
  }
}

// Shows results for 5 seconds
function showResult() {
  // directs to the first page after 5 seconds
  setTimeout(closeResults, 4900);
  myInterval = setInterval(() => {
    if (directedTime >= -1) directedIn.innerHTML = directedTime--;
  }, 1000);

  if (userScore > 3) {
    // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag = `and congrats! 🎉, You got ${userScore} out of ${questions.length} `;

    scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
  } else if (userScore > 1) {
    // if user scored more than 1
    let scoreTag = `and nice 😎, You got ${userScore} out of ${questions.length} `;
    scoreText.innerHTML = scoreTag;
  } else {
    // if user scored less than 1
    let scoreTag = `and sorry 😐, You got ${userScore} out of ${questions.length} `;

    scoreText.innerHTML = scoreTag;
  }
}

// a function to make result page invisible
function closeResults() {
  resultBox.classList.remove("active");
  isAnswered = true;
  number = 0;
  numberLeft = 300;
  questionNumber = 0;
  userScore = 0;
  directedTime = 4;

  clearInterval(myInterval);
  directedIn.innerHTML = "5";
}
