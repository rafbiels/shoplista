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
    itemList.push( <li>{recipe.items[i]} x{recipe.amounts[i]}</li> );
  }
  return (
    <div>
      <h2>Recipe:</h2>
      <h3>{recipe.name}</h3>
      <h5>{recipe.description}</h5>
      <ul>{itemList}</ul>
    </div>
  );
};
