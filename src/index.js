import './index.css';

const submit = document.querySelector('.submit');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const scoresList = document.getElementById('scores');

// create a new score item for the list
const createScores = (name, score) => {
  const li = document.createElement('li');
  li.textContent = `${name}: ${score}`;
  return li;
};

submit.addEventListener('click', (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const score = scoreInput.value;

  // Add new score to the list
  const newScore = createScores(name, score);
  scoresList.appendChild(newScore);

  // clear the input fields
  nameInput.value = '';
  scoreInput.value = '';
});
