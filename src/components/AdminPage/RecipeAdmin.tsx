import { useEffect } from "react";
import { useRecipes } from "../../hooks/useRecipe";
import { Flame } from "lucide-react";

const RecipeAdmin = () => {
  const { fetchAdminRecipes, recipeArray } = useRecipes();

  useEffect(() => {
    fetchAdminRecipes();
  }, [fetchAdminRecipes]);

  return (
    <div className="mx-auto grid max-w-5xl list-none grid-cols-1 gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3 lg:px-0">
      {recipeArray.map((recipe) => (
        <li
          key={recipe.id}
          className={`overflow-hidden rounded-lg ${
            recipe.isDeleted ? "bg-red-100" : "bg-emerald-100"
          }`}
        >
          <div className="h-30 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg"
              alt="recipe image"
            />
          </div>
          <div className="m-4 flex flex-col gap-3">
            <div className="flex flex-col">
              <p
                className={`text-lg font-semibold ${recipe.isDeleted ? "text-red-600" : "text-emerald-600"}`}
              >
                {recipe.name}
              </p>
              <p
                className={`${recipe.isDeleted ? "text-red-600" : "text-orange-600"} text-md flex flex-row gap-1`}
              >
                <Flame className="h-5 w-5" />
                <span className="font-semibold">{recipe.calories}</span>{" "}
                <span>cal</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {/* Delete – soft danger */}
              <button
                disabled={recipe.isDeleted}
                className="w-20 rounded border border-red-200 bg-white px-2 py-1 text-sm font-medium text-red-600/90 transition hover:border-red-300 hover:bg-red-50 active:bg-red-100 disabled:cursor-not-allowed disabled:border-red-100 disabled:text-red-400 disabled:opacity-70"
              >
                Delete
              </button>

              {/* Details – neutral & trustworthy */}
              <button
                disabled={recipe.isDeleted}
                className="w-20 rounded border border-emerald-200 bg-white px-2 py-1 text-sm font-medium text-emerald-600/90 transition hover:border-emerald-300 hover:bg-emerald-50 active:bg-emerald-100 disabled:cursor-not-allowed disabled:border-emerald-100 disabled:text-emerald-400 disabled:opacity-70"
              >
                Details
              </button>

              {/* Restore – gentle success */}
              <button
                disabled={!recipe.isDeleted}
                className="w-20 rounded border border-emerald-200 bg-white px-2 py-1 text-sm font-medium text-emerald-600/90 transition hover:border-emerald-300 hover:bg-emerald-50 active:bg-emerald-100 disabled:cursor-not-allowed disabled:border-emerald-100 disabled:text-emerald-400 disabled:opacity-70"
              >
                Restore
              </button>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default RecipeAdmin;
