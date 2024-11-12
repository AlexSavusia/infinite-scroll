import api from '../api.js';

const baseURL = 'https://randomuser.me/api/';

export default {
  getUsers: async (params) => {
    return api.get(baseURL, '', params);
  }
};