import {model, Model, Schema, Document} from 'mongoose';

interface IRecipe extends Document {
  username: string;
  name: string;
  description: string;
  items: string[];
  amounts: number[];
}

const RecipeSchema = new Schema({
  username: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String},
  items: {type: [String]},
  amounts: {type: [Number]}
}, {
  timestamps: true
});

const Recipe: Model<IRecipe> = model('Recipe', RecipeSchema);

export {IRecipe, Recipe};
