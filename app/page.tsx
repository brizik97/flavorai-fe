import AddRecipe from '@/components/recipe/AddRecipe';
import LatestReceipes from '@/components/recipe/LatestReceipes';

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 rounded-xl shadow-md">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Welcome to FlavorAI</h1>
            <p className="text-lg mb-6">
              Discover and share your favorite recipes with the power of AI.
            </p>
          </div>
          <AddRecipe />
        </div>
        <LatestReceipes />
      </div>
    </main>
  );
}
