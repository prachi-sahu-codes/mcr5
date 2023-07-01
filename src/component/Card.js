import React from "react";
import { useNavigate } from "react-router";
import { GrNext } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { useData } from "../context/DataContext";

export const Card = ({ item }) => {
  const navigate = useNavigate();
  const { searchDispatch } = useData();

  return (
    <div className="card">
      <div
        className="cancel-icon"
        onClick={() => searchDispatch({ type: "DELETE", payload: item.id })}
      >
        <AiOutlineDelete />
      </div>
      <img src={item.image} alt="recipe pic" className="img-card" />
      <h2>{item.name}</h2>
      <div className="flex-between">
        <p className="bold">Cuisine Type:</p>
        <p>{item.cuisine}</p>
      </div>
      <div className="flex-between">
        <p className="bold">Ingredients:</p>
        <p className="flex" onClick={() => navigate(`/detail/${item.id}`)}>
          <span>See Recipe</span> <GrNext className="see-icon" />
        </p>
      </div>
      <div className="flex-between">
        <p className="bold">Instructions:</p>
        <p className="flex" onClick={() => navigate(`/detail/${item.id}`)}>
          <span>See Recipe</span> <GrNext className="see-icon" />
        </p>
      </div>
    </div>
  );
};
