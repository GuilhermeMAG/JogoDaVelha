import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchGameData = async () => {
  const response = await api.get('/game');
  return response.data;
};