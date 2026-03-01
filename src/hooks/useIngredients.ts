import { useCallback, useState } from "react";
import api from "../api/axios";

export type IngredientResponse = {
  message: string;
  data: Ingredient[];
};

export type Ingredient = {
  id: number;
  name: string;
  calories: number;
  protein: number;
  carbohydrate: number;
  fat: number;
  isDeleted: boolean;
};

const useIngredient = () => {
  const [ingredientData, setIngredientData] = useState<Ingredient[]>([]);

  const fetchIngredients = useCallback(async () => {
    try {
      const res = await api.get("/admin/ingredient/all", {
        withCredentials: true,
      });
      console.log("Api response: ", res.data);
      setIngredientData(res.data);
    } catch (error) {
      console.log("FetchIngredient error" + error);
    }
  }, []);

  const deleteIngredient = async (ingredientId: number) => {
    try {
      await api.patch(`/admin/ingredient/${ingredientId}/delete`, null, {
        withCredentials: true,
      });
      setIngredientData((prev) =>
        prev.map((ingredient) =>
          ingredient.id === ingredientId
            ? { ...ingredient, isDeleted: true }
            : ingredient,
        ),
      );
    } catch (error) {
      console.log("DeleteIngredient error" + error);
    }
  };

  const restoreIngredient = async (ingredientId: number) => {
    try {
      await api.patch(`admin/ingredient/${ingredientId}/restore`, null, {
        withCredentials: true,
      });
      setIngredientData((prev) =>
        prev.map((ingredient) =>
          ingredient.id === ingredientId
            ? { ...ingredient, isDeleted: false }
            : ingredient,
        ),
      );
    } catch (error) {
      console.log("RestoreIngredient error" + error);
    }
  };

  const editIngredient = async (
    ingredientId: number,
    updatedFields: Partial<Ingredient>,
  ) => {
    try {
      const res = await api.patch(
        `/admin/ingredient/${ingredientId}/edit`,
        updatedFields,
        { withCredentials: true },
      );

      setIngredientData((prev) =>
        prev.map((ingredient) =>
          ingredient.id === ingredientId
            ? { ...ingredient, ...updatedFields }
            : ingredient,
        ),
      );
    } catch (error) {
      console.log("EditIngredient error", error);
    }
  };

  return {
    ingredientData,
    fetchIngredients,
    deleteIngredient,
    restoreIngredient,
    editIngredient,
  };
};

export default useIngredient;
