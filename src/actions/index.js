//action creator
import axios from 'axios';

const API_KEY = '2153217d7aba5e02cd69a8679d623d7b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city}, us`;
  const request = axios.get(url).then().catch()
  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
