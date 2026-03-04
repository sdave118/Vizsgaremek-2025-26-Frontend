import { useEffect, useState } from "react";
import { useRecipes, type Recipe } from "../../hooks/useRecipes";
import type { DailyMeal } from "../../hooks/useMeals";
import RecipeCard from "../RecipeListPage/RecipeCard";

const SelectedMealPlan = ({ dailyPlan }: { dailyPlan: DailyMeal }) => {
  const { fetchRecipeById } = useRecipes();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const [breakfast, lunch, soup, dinner] = await Promise.all([
        fetchRecipeById(dailyPlan.breakfastRecipeId),
        fetchRecipeById(dailyPlan.lunchRecipeId),
        fetchRecipeById(dailyPlan.soupRecipeId),
        fetchRecipeById(dailyPlan.dinnerRecipeId),
      ]);

      setRecipes([breakfast, lunch, soup, dinner].filter(Boolean) as Recipe[]);
    };

    fetchRecipes();
  }, [dailyPlan, fetchRecipeById]);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {recipes.map((recipe, index) => (
        <div>
          <RecipeCard key={index} recipe={recipe} />
        </div>
      ))}
    </div>
  );
};
export default SelectedMealPlan;
