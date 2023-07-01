import React from "react";
import { useData } from "../context/DataContext";

export const Search = () => {
  const { searchState, searchDispatch } = useData();
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search the items you want"
        onChange={(e) =>
          searchDispatch({ type: "SEARCH", payload: e.target.value })
        }
      />
      <span className="bold search-title">Filters:</span>
      <input
        type="radio"
        name="recipe"
        id="name"
        value="name"
        checked={searchState.type === "name"}
        onChange={(e) =>
          searchDispatch({ type: "Radio_Select", payload: e.target.value })
        }
      />
      <label htmlFor="name">Name</label>

      <input
        type="radio"
        name="recipe"
        id="ingredients"
        value="ingredients"
        checked={searchState.type === "ingredients"}
        onChange={(e) =>
          searchDispatch({ type: "Radio_Select", payload: e.target.value })
        }
      />
      <label htmlFor="ingredients">Ingredients</label>

      <input
        type="radio"
        name="recipe"
        id="cuisine"
        value="cuisine"
        checked={searchState.type === "cuisine"}
        onChange={(e) =>
          searchDispatch({ type: "Radio_Select", payload: e.target.value })
        }
      />
      <label htmlFor="cuisine">Cuisine</label>
    </div>
  );
};
