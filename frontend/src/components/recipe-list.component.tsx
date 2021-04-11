import React, { useEffect, useState } from "react";
import {IRecipe, Recipe} from './recipe.component'
import axios from 'axios'

// interface Props {
//   recipes: IRecipe[];
// }

const defaultRecipes: IRecipe[] = [];

export const RecipeList = (/* {recipes}: Props */) => {
  const [recipes, setRecipes] = useState(defaultRecipes);

  useEffect(() => {
    console.log("useEffect called");
    axios.get('http://localhost:5000/recipes/')
      .then((response) => {
        console.log('axios received recipes');
        setRecipes(response.data);
      })
      .catch((err) => {console.log(err);});
  }, []);

  const recipeComps: JSX.Element[] = [];
  for (let r of recipes) {
    recipeComps.push(<Recipe recipe={r} />);
  }
  return (
    <div>
      <h1>Recipe list</h1>
      <div>{recipeComps}</div>
    </div>
  );
};
