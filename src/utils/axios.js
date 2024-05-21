import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.request.use(
  (config) => {
    const auth = { headers: { } };
    auth.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}` || null;
    return { ...config, ...auth };
  },
  (error) => {
    return error;
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  all: axios.all,
  spread: axios.spread
};
