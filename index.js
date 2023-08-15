// Index

const _triviaAmount = document.getElementById("triviaAmount");
let triviAmount = 0;
const _triviaCategory = document.getElementById("triviaCategory");
const _triviaDifficulty = document.getElementById("triviaDifficulty");
const _triviaType = document.getElementById("triviaType");
const _startTrivia = document.getElementById("start");
let APIURL = `https://opentdb.com/api.php?amount=1`;

_triviaAmount.addEventListener("keyup", () => {
  let i = 0;
  _triviaAmount.value === "" && i++;
  i == 0 ? _startTrivia.disabled = false : _startTrivia.disabled = true;
})


_startTrivia.addEventListener('click', () => {
  triviAmount = _triviaAmount.value;

  if (_triviaCategory.value !== "any") {
    APIURL += `&category=${_triviaCategory.value}`
  }
  if (_triviaDifficulty.value !== "any") {
    APIURL += `&difficulty=${_triviaDifficulty.value}`
  }
  if (_triviaType.value !== "any") {
    APIURL += `&type=${_triviaType.value}`
  }

  window.localStorage.setItem('triviAmount', triviAmount);
  window.localStorage.setItem('APIURL', APIURL);

  location.href = 'questions.html';
})

// https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple