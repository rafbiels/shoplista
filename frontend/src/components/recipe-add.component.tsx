import React from "react";
import {IRecipe} from "./recipe.component"

export interface ITextFieldProps {
  id: string;
  label?: string;
  className?: string;
}

const TextField = ({id, label, className} : ITextFieldProps) => {
  return (
    <input
      id={id}
      type="text"
      placeholder={label}
      onChange={
        (e: React.FormEvent<HTMLInputElement>) =>
          console.log(e) /* TODO: push change to form values */
      }
      onBlur={
        (e: React.FormEvent<HTMLInputElement>) =>
          console.log(e) /* TODO: validate field value */
      }
      className={"recipe-add form-control "  + className}
    />
  );
};

export const AddRecipe = () => {
  return (
    // <Form 
    //   action="#"
    //   render={() => (
    //     <React.Fragment>
    //       <Field id="name" label="Name" />
    //       <Field id="description" label="Description" />
    //       <Field id="ingredient1" label="Ingredient" />
    //       <Field id="amount1" label="Amount" />
    //     </React.Fragment>
    //   )}
    // />
    <div className="card recipe shadow-sm my-2 mx-auto p-0">
      <div className="card-body p-0">
        <h3 className="card-title bg-light py-1 px-3">
          <TextField id="name" label="Name" />
        </h3>
        <h5 className="card-subtitle my-1 mx-3">
          <TextField id="description" label="Description" />
        </h5>
        <ul className="card-text my-2 mx-1">
          <li>
            <TextField id="ingredient1" label="Ingredient" className="recipe-add-ingredient" />
            <TextField id="amount1" label="Amount" className="recipe-add-amount" />
          </li>
        </ul>
      </div>
    </div>
  );
};
