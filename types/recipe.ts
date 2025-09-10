export interface Recipe {
  id: string;
  title: string;
  description?: string;
  ingredients: string;
  instructions: string;
  createdAt: string;
  updatedAt: string;
}

export interface RecipeRequest {
  title: string;
  description?: string;
  ingredients: string;
  instructions: string;
}
