import { createContext, useContext, useReducer, useState } from "react";
import { recipes } from "../backend/data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { v4: uuidv4 } = require("uuid");
  const [showModal, setShowModal] = useState(false);

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

      case "DELETE":
        const updatedArr = state.data.filter(
          (item) => item.id !== action.payload
        );
        return { ...state, data: updatedArr };

      case "ADD_NEW_RECIPE":
        const findId = state.data.filter((item) => item.id === newRecipe.id);
        if (findId.length > 0) {
          const newData = action.payload;
          const editUpdatedArr = state.data.map((item) =>
            item.id === newData.id ? { ...newData } : item
          );
          return { ...state, data: editUpdatedArr };
        } else {
          const newArr = [...state.data, { ...action.payload, id: uuidv4() }];
          setNewRecipe(() => ({
            id: "",
            name: "",
            image: "",
            cuisine: "",
            ingredients: "",
            instructions: "",
          }));

          return { ...state, data: newArr };
        }

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
      value={{
        showModal,
        setShowModal,
        searchState,
        searchDispatch,
        newRecipe,
        setNewRecipe,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
