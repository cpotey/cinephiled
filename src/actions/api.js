import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0ddaa25ecf2d456f112e8c778772848a',
  },
});