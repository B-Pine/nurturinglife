import { qnAnswerList } from "./qn-answer-page.js";

// defining all DOM's

const prevQnBtn = document.querySelector('.prev-qn-btn');
const nextQnBtn = document.querySelector('.next-qn-btn');
const answerContent = document.querySelector('.answer-content');
const showHideAns = document.querySelector('.show-hide-answer');
const qnNumbering = document.querySelector('.qn-numbering');
const qnContent = document.querySelector('.question-content');


let currentQn = 0;
renderGameContent(currentQn);


function renderGameContent (qnIndex) {
  qnNumbering.textContent = `Question ${qnAnswerList[qnIndex].id}`;
  qnContent.textContent = `${qnAnswerList[qnIndex].question}`;
  answerContent.innerHTML =`<b>Ans: </b><i>${qnAnswerList[qnIndex].answer}</i>`;
}
// answerContent.style = "display: none";

showHideAns.addEventListener('click', () => {
  // console.log('clicked')
  if (showHideAns.textContent === 'Show Answer') {
    answerContent.style = 'display: block';
    showHideAns.textContent = 'Hide Answer';
  }
  else {
    defaultAnswerBeahvior()
  }
})

function defaultAnswerBeahvior() {
  answerContent.style = 'display: none';
  showHideAns.textContent = 'Show Answer';
} 


// Capturing nextbutton click event
nextQnBtn.addEventListener('click', () => {
  defaultAnswerBeahvior()
  if (currentQn >= qnAnswerList.length - 1){
    alert(`Sorry, No more questions!`);
    currentQn = qnAnswerList.length;
    renderGameContent(currentQn);
  }
  else {
    currentQn++;
    renderGameContent(currentQn);
  }
})

// Capturing prevbutton click event
prevQnBtn.addEventListener('click', ()=> {
  defaultAnswerBeahvior()
  if (currentQn > 0) {
    currentQn--;
    renderGameContent(currentQn);
  }
  else {
    // alert("Please don't mess around");
    currentQn = 0;
  }
})

document.querySelector('.fa-exclamation').title = "Prepare your notebook and pen or pencil deliberately, ensuring that you read each question carefully and formulate your response on paper before reviewing the provided answer. After completing ten questions, take a moment to evaluate your performance. Given your enthusiasm for gaining in-depth knowledge about reproductive health, it is recommended that you engage in thoughtful consideration before unveiling the correct answers.";




