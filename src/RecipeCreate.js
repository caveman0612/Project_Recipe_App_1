import React, { useState } from "react";

function RecipeCreate({ addNewRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const _initialState = {
    Name: "",
    Cuisine: "",
    Photo: "",
    Ingredients: "",
    Preparation: "",
  };

  const [formData, setFormData] = useState(_initialState);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewRecipe(formData);
    setFormData(_initialState);
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                placeholder="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <input
                placeholder="Cuisine"
                name="Cuisine"
                value={formData.Cuisine}
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <input
                placeholder="Photo"
                name="Photo"
                value={formData.Photo}
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <textarea
                placeholder="Ingredients"
                name="Ingredients"
                value={formData.Ingredients}
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <textarea
                placeholder="Preparation"
                name="Preparation"
                value={formData.Preparation}
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
