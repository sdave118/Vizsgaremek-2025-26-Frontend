import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useIngredient } from "../hooks/useIngredient";
import RecipeStepList from "../components/AddRecipePage/RecipeStepList";
import RecipeIngredientList from "../components/AddRecipePage/RecipeIngredientList";
import { TagSelector } from "../components/AddRecipePage/TagSelector";
import ImageUpload from "../components/AddRecipePage/ImageUpload";

const theme = createTheme({
  palette: { primary: { main: "#6b9080" } },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          "&:hover:not(.Mui-disabled):before": { borderBottomColor: "#6b9080" },
          "&:before": { borderBottomColor: "#d1d5db" },
          "&:after": { borderBottomColor: "#6b9080" },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#6b7280",
          "&.Mui-focused": { color: "#6b9080" },
        },
      },
    },
  },
});

type RecipeIngredient = { id: number; name: string; amount: number };

const AddRecipePage = () => {
  const { fetchIngredients, ingredients } = useIngredient();

  const [recipeIngredients, setRecipeIngredients] = useState<
    RecipeIngredient[]
  >([{ id: 1, name: "", amount: 0 }]);
  const [steps, setSteps] = useState<string[]>([""]);
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);

  const addRecipeIngredient = () =>
    setRecipeIngredients((prev) => [
      ...prev,
      { id: Date.now(), name: "", amount: 0 },
    ]);

  const removeRecipeIngredient = (id: number) =>
    setRecipeIngredients((prev) => prev.filter((i) => i.id !== id));

  const updateRecipeIngredient = (
    id: number,
    field: "name" | "amount",
    value: string | number,
  ) =>
    setRecipeIngredients((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              [field]:
                field === "amount" ? (value === "" ? 0 : Number(value)) : value,
            }
          : i,
      ),
    );

  const addStep = () => setSteps((prev) => [...prev, ""]);

  const removeStep = (index: number) =>
    setSteps((prev) => prev.filter((_, i) => i !== index));

  const updateStep = (index: number, value: string) =>
    setSteps((prev) => prev.map((s, i) => (i === index ? value : s)));

  useEffect(() => {
    fetchIngredients();
  }, [fetchIngredients]);

  return (
    <main className="mx-auto max-w-7xl space-y-5 p-5">
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <section className="mx-auto w-full max-w-5xl space-y-10 rounded-2xl border bg-white p-10 shadow-xl">
          <h1 className="border-primary-green-400 border-b-3 p-1 text-center text-2xl font-bold">
            Upload a new Recipe
          </h1>

          <ThemeProvider theme={theme}>
            <Box
              sx={{ display: "flex", gap: 3, justifyContent: "space-between" }}
            >
              <FormControl variant="standard" sx={{ width: 150, mt: "16px" }}>
                <InputLabel id="category" shrink>
                  Category
                </InputLabel>
                <Select
                  labelId="category"
                  label="Category"
                  defaultValue={"Breakfast"}
                >
                  <MenuItem value="Breakfast">Breakfast</MenuItem>
                  <MenuItem value="Lunch">Lunch</MenuItem>
                  <MenuItem value="Dinner">Dinner</MenuItem>
                </Select>
              </FormControl>
              <span className="flex items-end">
                <ImageUpload onImageChange={setImage} />
              </span>
            </Box>
            <section className={`overflow-hidden ${image ? "" : "hidden"}`}>
              <img
                src={image ? URL.createObjectURL(image) : ""}
                alt=""
                className="h-96 w-full rounded-xl object-cover transition-transform duration-300 hover:scale-99"
              />
            </section>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <TextField fullWidth label="Recipe Name" variant="standard" />
              <TextField fullWidth label="Description" variant="standard" />
            </Box>

            <Box sx={{ display: "flex", gap: 3 }}>
              <TextField
                fullWidth
                label="Prep Time (min)"
                variant="standard"
                type="number"
                inputProps={{ min: 0 }}
              />
              <TextField
                fullWidth
                label="Cook Time (min)"
                variant="standard"
                type="number"
                inputProps={{ min: 0 }}
              />
            </Box>
            <TagSelector selected={tags} onChange={setTags} />

            <RecipeIngredientList
              recipeIngredients={recipeIngredients}
              ingredients={ingredients}
              onAdd={addRecipeIngredient}
              onRemove={removeRecipeIngredient}
              onUpdate={updateRecipeIngredient}
            />

            <RecipeStepList
              steps={steps}
              onAdd={addStep}
              onRemove={removeStep}
              onUpdate={updateStep}
            />
          </ThemeProvider>

          <div className="mt-5 flex justify-end">
            <button
              type="button"
              className="bg-primary-green-400 hover:bg-primary-green-500 active:bg-primary-green-600 flex items-center justify-center rounded-full px-8 py-1.5 font-medium tracking-tight text-white transition duration-350"
            >
              Submit
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AddRecipePage;
