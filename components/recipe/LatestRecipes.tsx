import { backendUrl } from '@/lib/api/api';
import { Recipe } from '@/types/recipe';
import RecipeItem from './RecipeItem';

async function getData(): Promise<Recipe[] | undefined> {
  const domain = backendUrl + '/recipe';
  const res = await fetch(domain, {
    next: { revalidate: 10 * 60, tags: ['recipes'] },
  });
  const data = await res.json();
  if (!res.ok) {
    return undefined;
  }
  return data;
}

const LatestRecipes = async () => {
  const data = await getData();
  if (!data) {
    return <div>No recipes found</div>;
  }
  return (
    <div>
      {data.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
export default LatestRecipes;
