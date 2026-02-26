import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipes } from "../hooks/useRecipes";
import { Clock, Utensils } from "lucide-react";
import AddTodayRecipeModal from "../components/AddTodayRecipeModal";
import { useMeals } from "../hooks/useMeals";

const RecipePage = () => {
  const recipeId = useParams();
  const { fetchRecipeById, recipeData } = useRecipes();
  const { addMeal } = useMeals();

  const splitRecipSteps = (steps: string | undefined) => {
    if (!steps) {
      return;
    }
    return steps.split(";");
  };

  useEffect(() => {
    fetchRecipeById(Number(recipeId.id));
  }, [fetchRecipeById, recipeId]);

  return (
    <div className="from-primary-green-50 min-h-full min-w-full bg-linear-to-br to-blue-50">
      <main className="mx-auto max-w-7xl space-y-6 rounded-2xl p-4">
        <section className="flex justify-between">
          <h1 className="text-3xl font-semibold">{recipeData?.name}</h1>
          <div>
            {recipeData && (
              <AddTodayRecipeModal
                props={{ isSearch: false, recipeData, addMeal }}
              />
            )}
          </div>
        </section>

        <section className="flex gap-2">
          {recipeData?.isVegan && (
            <div className="rounded-full bg-green-100 px-2 py-1 text-center text-xs text-green-800">
              Vegan
            </div>
          )}
          {recipeData?.isVegetarian && (
            <div className="rounded-full bg-lime-100 px-2 py-1 text-center text-xs text-lime-800">
              Vegetarian
            </div>
          )}
          {recipeData?.isVegan && (
            <div className="rounded-full bg-violet-100 px-2 py-1 text-center text-xs text-violet-800">
              Community
            </div>
          )}
        </section>

        <section className="overflow-hidden">
          <img
            src={recipeData?.imageUrl ?? "/2641886.jpg"}
            alt={recipeData?.name}
            className="h-96 w-full rounded-xl object-cover transition-transform duration-300 hover:scale-99"
          />
        </section>

        <section className="rounded-xl border border-slate-300 bg-white p-4">
          <div>{recipeData?.description}</div>
        </section>

        <section className="grid grid-cols-3 items-stretch gap-2 rounded-xl border border-slate-300 bg-white p-4">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex min-h-10 flex-col items-center justify-center gap-1">
              <Clock className="h-5 w-5 shrink-0 text-blue-600" />
              <p className="text-sm leading-tight font-light">Prep Time</p>
            </div>
            <p className="text-xl md:text-2xl">
              {recipeData?.preparationTime} min
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 border-x border-slate-200 text-center">
            <div className="flex min-h-10 flex-col items-center justify-center gap-1">
              <Clock className="h-5 w-5 shrink-0 text-green-600" />
              <p className="text-sm leading-tight font-light">Cooking Time</p>
            </div>
            <p className="text-xl md:text-2xl">{recipeData?.cookingTime} min</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex min-h-10 flex-col items-center justify-center gap-1">
              <Utensils className="h-5 w-5 shrink-0 text-violet-600" />
              <p className="text-sm leading-tight font-light">Servings</p>
            </div>
            <p className="text-xl md:text-2xl">{recipeData?.portions}</p>
          </div>
        </section>
        <section className="flex flex-col gap-4 rounded-xl border border-slate-300 bg-linear-to-br from-orange-50 to-red-50 p-4">
          <h2 className="text-lg font-semibold">
            Nutritional Information{" "}
            <span className="text-sm font-extralight">(per 100g)</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "Calories", value: recipeData?.calories, unit: "kcal" },
              { label: "Protein", value: recipeData?.protein, unit: "g" },
              { label: "Carbs", value: recipeData?.carbohydrate, unit: "g" },
              { label: "Fat", value: recipeData?.fat, unit: "g" },
            ].map(({ label, value, unit }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 py-3 text-center"
              >
                <p className="text-xs font-light tracking-widest">{label}</p>
                <p className="text-2xl">{value}</p>
                <p className="text-xs font-extralight">{unit}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-slate-300 bg-white p-4">
          <h1 className="pb-5 text-xl font-semibold"> Ingredients</h1>
          <ul>
            {recipeData?.ingredients.map((ingredient, idx) => (
              <li key={idx}>
                {ingredient.ingredientName} {ingredient.amount}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-300 bg-white p-4">
          <h1 className="pb-5 text-xl font-semibold">Instructions</h1>
          <div className="space-y-3 md:pl-10">
            {splitRecipSteps(recipeData?.instructions)?.map((step, idx) => (
              <section className="flex items-center space-x-2">
                <div className="bg-primary-green-100 text-primary-green-800 flex min-h-10 min-w-10 items-center justify-center rounded-full">
                  {idx + 1}
                </div>
                <div key={idx} className="font-light">
                  {step}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default RecipePage;
