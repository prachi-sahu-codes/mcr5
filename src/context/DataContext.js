import { createContext, useContext, useReducer, useState } from "react";
import { recipes } from "../backend/data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [newRecipe, setNewRecipe] = useState({
    id: "",
    name: "",
    image: "",
    cuisine: "",
    ingredients: "",
    instructions: "",
  });

  const searchReducer = (state, action) => {
    switch (action.type) {
      case "Radio_Select":
        return { ...state, type: action.payload };

      case "SEARCH":
        if (action.payload.length > 0) {
          const updatedData = state.data.filter((item) =>
            item[state.type].toLowerCase().includes(action.payload)
          );
          return { ...state, data: updatedData };
        } else {
          return { ...state, data: recipes };
        }

      case "ADD_NEW_RECIPE":
        const newArr = [...state.data, action.payload];
        setNewRecipe(() => ({
          id: "",
          name: "",
          image: "",
          cuisine: "",
          ingredients: "",
          instructions: "",
        }));

        return { ...state, data: newArr };

      default:
        return state;
    }
  };

  const [searchState, searchDispatch] = useReducer(searchReducer, {
    data: recipes,
    type: "name",
  });

  return (
    <DataContext.Provider
      value={{ searchState, searchDispatch, newRecipe, setNewRecipe }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
