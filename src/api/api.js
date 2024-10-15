import axios from 'axios';

const apiFootball = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3',
  headers: {
    'X-RapidAPI-Key': 'SUA API KEY AQUI',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
});

export default apiFootball;
