import { LoginResponse, RegisterUser, UserResponse } from '@/types/auth';
import { Recipe, RecipeRequest } from '@/types/recipe';
import axios from 'axios';

const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: backendUrl,
});

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

export const getUserProfile = ({ token }: { token: string }) =>
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

export const getRecipes = () =>
  api.get<Recipe[]>('/recipe').then((res) => res.data);

export const getRecipeById = (id: string) =>
  api.get<Recipe>(`/recipe/${id}`).then((res) => res.data);

export const addRecipe = (recipe: RecipeRequest) =>
  api.post<Recipe>('/recipe', recipe).then((res) => res.data);
