import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  function addNewRecipe(formData) {
    const newRecipe = {
      name: formData.Name,
      cuisine: formData.Cuisine,
      photo: formData.Photo,
      ingredients: formData.Ingredients,
      preparation: formData.Preparation,
    };
    setRecipes([...recipes, newRecipe]);
  }

  function deleteRecipe(event, item) {
    setRecipes(recipes.filter((recipe) => recipe.name !== item.name));
  }

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addNewRecipe={addNewRecipe} />
    </div>
  );
}

export default App;
