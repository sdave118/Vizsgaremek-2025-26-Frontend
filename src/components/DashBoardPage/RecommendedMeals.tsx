import { Link } from "react-router-dom";
import type { DailyMeal } from "../../hooks/useMeals";

interface MealItemProps {
  type: string;
  name?: string;
  recipeId?: number;
}

const MealItem = ({ type, name, recipeId }: MealItemProps) => (
  <div className="flex flex-col gap-3 rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100 sm:flex-row sm:items-center sm:justify-between">
    <div className="min-w-0 flex-1">
      <p className="truncate text-sm font-semibold">{name}</p>
      <p className="text-xs font-extralight text-gray-600">{type}</p>
    </div>
    <Link
      to={`/recipe/${recipeId}`}
      className="hover:bg-primary-green-400 flex items-center justify-center gap-1 rounded-xl border border-gray-400 bg-white px-3 py-2 text-sm whitespace-nowrap transition-colors hover:text-white sm:self-center"
    >
      View recipe <span className="ml-1">→</span>
    </Link>
  </div>
);

const RecommendedMeals = ({
  recommendedMeals,
}: {
  recommendedMeals: DailyMeal | undefined;
}) => {
  const mealTypes = [
    {
      name: "Breakfast",
      meal: recommendedMeals?.breakfast,
      recipeId: recommendedMeals?.breakfastRecipeId,
    },
    {
      name: "Soup",
      meal: recommendedMeals?.soup,
      recipeId: recommendedMeals?.soupRecipeId,
    },
    {
      name: "Lunch",
      meal: recommendedMeals?.lunch,
      recipeId: recommendedMeals?.lunchRecipeId,
    },
    {
      name: "Dinner",
      meal: recommendedMeals?.dinner,
      recipeId: recommendedMeals?.dinnerRecipeId,
    },
  ];

  return (
    <section className="w-full">
      <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-4 sm:space-y-6 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold sm:text-xl">
            Recommended Meals
          </h2>
          <Link
            to="/meal-plan"
            className="self-start rounded-xl border border-gray-400 px-3 py-2 text-sm whitespace-nowrap transition-colors hover:bg-neutral-100 sm:self-auto"
          >
            View Plan
          </Link>
        </div>
        <div className="space-y-3">
          {mealTypes.map(({ name, meal, recipeId }) => (
            <MealItem key={name} type={name} name={meal} recipeId={recipeId} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedMeals;
