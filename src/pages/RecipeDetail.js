import React from "react";
import { useParams } from "react-router";
import { useData } from "../context/DataContext";

export const RecipeDetail = () => {
  const { id } = useParams();
  const { searchState } = useData();

  const findItem = searchState.data.find((item) => item.id === id);
  console.log(findItem.instructions);
  const instructionArr = findItem.instructions.trim().split(". ");
  return (
    <div>
      <h1>{findItem?.name}</h1>
      <div className="detail-card">
        <img src={findItem?.image} alt="recepe" className="image-detail" />
        <div>
          <h3 className="bold">Cuisine: {findItem?.cuisine}</h3>

          <div>
            <span className="bold">Ingredients:</span> {findItem?.ingredients}
          </div>

          <div className="instructions">
            <span className="bold">Instructions:</span>
            <ol className="steps-list">
              {instructionArr?.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
