import React from "react";
import { MdCancel } from "react-icons/md";
import { useData } from "../context/DataContext";

export const RecipeModal = ({ setShowModal }) => {
  const { newRecipe, setNewRecipe, searchDispatch } = useData();

  const addDataHandler = () => {
    if (
      newRecipe.name &&
      newRecipe.image &&
      newRecipe.cuisine &&
      newRecipe.ingredients &&
      newRecipe.instructions
    ) {
      searchDispatch({
        type: "ADD_NEW_RECIPE",
        payload: { ...newRecipe },
      });
      setShowModal(false);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="modal-bg">
      <div className="receipe-modal">
        <div onClick={() => setShowModal(false)} className="cancel-icon">
          <MdCancel />
        </div>
        <h2>New Recipe</h2>

        <div className="modal-input">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Recipe Name"
            value={newRecipe.name}
            onChange={(e) =>
              setNewRecipe((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div className="modal-input">
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="url"
            placeholder="Image Url"
            value={newRecipe.image}
            onChange={(e) =>
              setNewRecipe((prev) => ({ ...prev, image: e.target.value }))
            }
          />
        </div>

        <div className="modal-input">
          <label htmlFor="cuisine">Cuisine:</label>
          <input
            id="cuisine"
            type="text"
            placeholder="Cuisine Name"
            value={newRecipe.cuisine}
            onChange={(e) =>
              setNewRecipe((prev) => ({ ...prev, cuisine: e.target.value }))
            }
          />
        </div>

        <div className="modal-input">
          <label htmlFor="ingredients">Ingredients:</label>
          <input
            id="ingredients"
            type="text"
            placeholder="Recipe Ingredients"
            value={newRecipe.ingredients}
            onChange={(e) =>
              setNewRecipe((prev) => ({ ...prev, ingredients: e.target.value }))
            }
          />
        </div>

        <div className="modal-input">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            rows={3}
            placeholder="Recipe Instructions steps separated by fullstop"
            value={newRecipe.instructions}
            onChange={(e) =>
              setNewRecipe((prev) => ({
                ...prev,
                instructions: e.target.value,
              }))
            }
          ></textarea>
        </div>

        <button className="add-btn" onClick={() => addDataHandler()}>
          Add
        </button>
      </div>
    </div>
  );
};
