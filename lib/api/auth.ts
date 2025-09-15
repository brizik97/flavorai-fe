import { LoginResponse, RegisterUser, UserResponse } from '@/types/auth';
import { api } from './api';

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  api
    .post<LoginResponse>('/auth/login', { email, password })
    .then((res) => res.data);

export const getUserProfile = (token: string) =>
  api
    .get<UserResponse>('/auth/profile', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const register = ({
  email,
  password,
  username,
}: {
  email: string;
  password: string;
  username: string;
}) =>
  api
    .post<RegisterUser>('/auth/register', { email, password, username })
    .then((res) => res.data);
