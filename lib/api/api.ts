import axios from 'axios';

export const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

export const api = axios.create({
  baseURL: backendUrl,
});

export const setAccessToken = (token?: string) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};
