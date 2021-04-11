import {Router} from 'express';
import {IRecipe, Recipe} from '../models/recipe.model';

const router = Router();

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const recipe: IRecipe = new Recipe({
    username: req.body.username,
    name: req.body.name
  });

  if ('description' in req.body) recipe.description = req.body.description;

  if (('items' in req.body) != ('amounts' in req.body)) {
    throw new Error("Both or neither of 'items' and 'amounts' required for Recipe");
  }

  if ('items' in req.body) {
    if (!Array.isArray(req.body.items) || !Array.isArray(req.body.amounts)) {
      throw new Error("Recipe items and amounts need to be arrays");
    }
    if (req.body.items.length != req.body.amounts.length) {
      throw new Error("Recipe items and amounts arrays need to have equal lengths");
    }
    recipe.items = req.body.items;
    recipe.amounts = req.body.amounts;
  }

  recipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
