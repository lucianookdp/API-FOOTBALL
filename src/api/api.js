import axios from 'axios';

const apiFootball = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3',
  headers: {
    'X-RapidAPI-Key': '7e7389d802mshb39b260b6a84259p15a7d5jsn048c05eb7509',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
});

export default apiFootball;
