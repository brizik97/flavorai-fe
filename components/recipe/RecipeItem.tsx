import { Recipe } from '@/types/recipe';

const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div
      key={recipe.id}
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        marginBottom: '16px',
      }}
    >
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};
export default RecipeItem;
