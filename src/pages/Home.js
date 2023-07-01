import React from "react";
import { useData } from "../context/DataContext";
import { Card } from "../component/Card";
import { Search } from "../component/Search";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RecipeModal } from "../component/RecipeModal";

export const Home = () => {
  const { searchState, showModal, setShowModal } = useData();

  return (
    <div>
      <Search />
      <h1 className="home-title">All Recipes: </h1>
      <ul className="card-list">
        <li
          key="new"
          className="create-new"
          onClick={() => setShowModal((prev) => !prev)}
        >
          <h3>Add New Recipe</h3>
          <div className="new-icon">
            <AiOutlinePlusCircle />
          </div>
        </li>
        {searchState.data.map((item) => (
          <li key={item.id}>
            <Card item={item} />
          </li>
        ))}
      </ul>
      {showModal && <RecipeModal setShowModal={setShowModal} />}
    </div>
  );
};
