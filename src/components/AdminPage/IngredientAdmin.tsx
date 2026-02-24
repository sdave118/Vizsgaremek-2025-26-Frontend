import { useEffect } from "react";
import useIngredients from "../../hooks/useIngredients";
import { Flame } from "lucide-react";

const IngredientAdmin = () => {
  const {
    ingredientData,
    fetchIngredients,
    deleteIngredient,
    restoreIngredient,
  } = useIngredients();

  useEffect(() => {
    fetchIngredients();
  }, [fetchIngredients]);

  return (
    <div className="mx-auto grid max-w-5xl list-none grid-cols-1 gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3 lg:px-0">
      {ingredientData.map((ingredient) => (
        <li
          key={ingredient.id}
          className={`rounded-lg p-4 ${
            ingredient.isDeleted
              ? "bg-red-100 text-red-800"
              : "bg-emerald-100 text-emerald-900"
          }`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p
                className={`text-lg font-semibold ${
                  ingredient.isDeleted ? "line-through" : ""
                }`}
              >
                {ingredient.name}
              </p>
              <p
                className={`${ingredient.isDeleted ? "text-red-600" : "text-orange-600"} text-md flex flex-row gap-1`}
              >
                <Flame className="h-5 w-5" />
                <span className="font-semibold">
                  {ingredient.calories}
                </span>{" "}
                <span>cal</span>
              </p>
              <p className="text-sm font-light">
                carbohydrate: {ingredient.carbohydrate}g | protein:{" "}
                {ingredient.protein}g | fat: {ingredient.fat}g
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => deleteIngredient(ingredient.id)}
                disabled={ingredient.isDeleted}
                className="w-20 rounded border border-red-200 bg-red-100 px-2 py-1 text-sm font-medium text-red-600/90 transition hover:border-red-300 hover:bg-red-200 active:bg-red-100 disabled:cursor-not-allowed disabled:border-red-100 disabled:text-red-400 disabled:opacity-70"
              >
                Delete
              </button>

              <button
                disabled={ingredient.isDeleted}
                className="w-20 rounded border border-emerald-200 bg-white px-2 py-1 text-sm font-medium text-emerald-600/90 transition hover:border-emerald-300 hover:bg-emerald-50 active:bg-emerald-100 disabled:cursor-not-allowed disabled:border-emerald-100 disabled:text-emerald-400 disabled:opacity-70"
              >
                Edit
              </button>

              <button
                onClick={() => restoreIngredient(ingredient.id)}
                disabled={!ingredient.isDeleted}
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

export default IngredientAdmin;
