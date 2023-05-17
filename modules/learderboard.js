const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const createGameScores = (name, score) => {
  const li = document.createElement('li');
  li.innerHTML = `
  <span class="player-display">${name}</span>
<span class="score-display">${score}</span>
`;
  return li;
};

export const getGameScores = async (gameId) => {
  const response = await fetch(`${apiUrl}games/${gameId}/scores/`);
  const data = await response.json();
  return data.result;
};

export const saveGameScore = async (gameId, name, score) => {
  const response = await fetch(`${apiUrl}games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score }),
  });
  const data = await response.json();
  return data.result;
};
