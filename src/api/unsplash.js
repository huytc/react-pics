import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 513490773761d90a23b11452b4b35d60aa08c67d37226148408dba17eb99a8ab'
  }
});