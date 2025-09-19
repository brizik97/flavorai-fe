'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getUserRecipes } from '@/lib/api/recipe';
import RecipeItem from './RecipeItem';
import { Recipe } from '@/types/recipe';

const UserRecipes = () => {
  const { data: session, status } = useSession();
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!session?.user?.accessToken) return;
      setLoading(true);
      try {
        const data = await getUserRecipes();
        setRecipes(data);
      } catch (error) {
        console.error('Failed to fetch recipes', error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [session?.user?.accessToken]);

  if (!recipes || recipes.length === 0) {
    return <div>No recipes found</div>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default UserRecipes;
