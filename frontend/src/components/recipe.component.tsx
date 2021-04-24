import React from "react";

export interface IRecipe {
  name: string;
  description: string;
  items: string[];
  amounts: number[];
}

interface Props {
  recipe: IRecipe;
}

export const Recipe = ({recipe}: Props) => {
  const itemList = [];
  for (let i=0; i<recipe.items.length; ++i) {
    itemList.push( <li key={"item"+i}>{recipe.items[i]} x{recipe.amounts[i]}</li> );
  }
  return (
    <div className="card recipe shadow-sm my-2 mx-auto p-0">
      <div className="card-body p-0">
        <h3 className="card-title bg-light py-1 px-3">{recipe.name}</h3>
        <h5 className="card-subtitle my-1 mx-3">{recipe.description}</h5>
        <ul className="card-text my-2 mx-1">{itemList}</ul>
      </div>
    </div>
  );
};
