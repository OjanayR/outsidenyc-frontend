const BASE_URL = 'http://localhost:3001/api/scores';


export function fetchScoreData() {
    return fetch(BASE_URL).then(res => res.json());
}

export function addScoreData(score) {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(score)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}