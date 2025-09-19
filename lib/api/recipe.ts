import { Recipe, RecipeRequest } from '@/types/recipe';
import { api } from './api';

export const getRecipes = () =>
  api.get<Recipe[]>('/recipe').then((res) => res.data);

export const getUserRecipes = () =>
  api.get<Recipe[]>('/recipe/my').then((res) => res.data);

export const getRecipeById = (id: string) =>
  api.get<Recipe>(`/recipe/${id}`).then((res) => res.data);

export const addRecipe = (recipe: RecipeRequest) =>
  api.post<Recipe>('/recipe', recipe).then((res) => res.data);
