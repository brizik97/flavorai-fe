import UserRecipes from '@/components/recipe/UserRecipes';

export default function MyRecipes() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 rounded-xl shadow-md">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Your Recipes</h1>
            <p className="text-lg mb-6">
              Manage and explore your personal collection of recipes.
            </p>
          </div>
        </div>
        <UserRecipes />
      </div>
    </main>
  );
}
